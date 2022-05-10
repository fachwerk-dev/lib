import {
  ref,
  h,
  computed,
  onMounted,
  watchEffect,
  getCurrentInstance,
  Ref,
} from "vue";
import { data } from "./lib.esm";
import { compileTemplate, compileMarkdown } from "./internal";
import { parse } from "@slidev/parser";
import { useStorage, useMagicKeys } from "@vueuse/core";

const Icon = {
  props: ["id"],
  setup(props: any) {
    const icon = ref("");
    const [collection, name] = props.id.split(":");
    fetch(`https://unpkg.com/@iconify/json/json/${collection}.json`)
      .then((res) => res.json())
      .then(({ icons }) => {
        icon.value = icons[name].body;
      });
    return { icon };
  },
  template: `<svg class="w-5 h-5 inline-block align-middle" viewBox="0 0 24 24" v-html="icon" />`,
};

const Compiler = {
  props: ["code"],
  setup(props: any) {
    const Output = computed(() => {
      return {
        setup() {
          const app = getCurrentInstance()!.appContext.app;
          return { ...app.config.globalProperties };
        },
        render: compileTemplate(compileMarkdown(props.code)).code,
      };
    });
    return () => h(Output.value);
  },
};

const Info = {
  inheritAttrs: false,
  props: { icon: { default: "bx:info-circle" } },
  template: `
  <div class="flex gap-2 md:gap-3">
    <Icon :id="icon" class=" md:w-6 md:h-6 xl:w-8 xl:h-8 text-gray-400 shrink-0" v-bind="$attrs" />
    <div class="text-gray-400 -mt-1"><slot /></div>
  </div>
  `,
};

const fahrenheit = ref(-460);
const celsius = computed(() => Math.floor((5 / 9) * (fahrenheit.value - 32)));
const resetFahrenheit = () => {
  fahrenheit.value = -460;
};

function parseSlides(code: any) {
  let global = {};
  try {
    return parse(code).slides.map((s) => {
      if (s.frontmatter?.data) {
        Object.entries(s.frontmatter.data).forEach(([key, value]) => {
          data[key] = value;
        });
      }
      if (s.frontmatter?.global) {
        global = { ...global, ...s.frontmatter.global };
      }
      s.frontmatter.global = global;
      s.content = compileMarkdown(s.content);
      return s;
    });
  } catch (e) {
    return [];
  }
}

export function useEditor() {
  const input = ref<HTMLTextAreaElement | null>(null);
  onMounted(() => {
    if (input.value) {
      input.value.addEventListener("keydown", (e) => {
        if (e.key === "Tab" && input.value) {
          e.preventDefault();
          input.value.setRangeText(
            Array.from({ length: 2 }).fill(" ").join(""),
            input.value.selectionStart,
            input.value.selectionStart,
            "end"
          );
        }
      });
    }
  });
  return input;
}

export function useLoader(key: string, loader: () => Promise<string>) {
  const saved = useStorage(key, "");
  const current = ref("");
  const save = () => (saved.value = current.value);
  const reset = () =>
    loader().then((original) => {
      saved.value = "";
      current.value = original;
    });
  loader().then((original) => {
    if (saved.value && original !== saved.value) {
      current.value = saved.value;
    } else {
      current.value = original;
    }
  });
  return { current, saved, save, reset };
}

export function useSlides(key: string, content: Ref<string>) {
  const slides = computed(() => parseSlides(content.value));
  const slideIndex = useStorage(key, 0);
  watchEffect(() => {
    if (slideIndex.value < 0) {
      slideIndex.value = 0;
    }
    if (slides.value.length > 1 && slideIndex.value > slides.value.length - 1) {
      slideIndex.value = slides.value.length - 1;
    }
  });
  const next = () => {
    if (slideIndex.value) {
      slideIndex.value++;
    }
  };
  const prev = () => {
    if (slideIndex.value) {
      slideIndex.value--;
    }
  };
  const go = (title: string) => {
    const index = slides.value.findIndex((s) => s.frontmatter?.title === title);
    if (index > -1) {
      slideIndex.value = index;
    }
  };
  const { shift, left, right } = useMagicKeys();
  watchEffect(() => {
    if (left.value && shift.value) prev();
    if (right.value && shift.value) next();
  });
  return { slides, slideIndex, prev, next, go };
}

export const App = {
  components: { Compiler, Icon },
  setup() {
    const app = getCurrentInstance()!.appContext.app;

    const loader =
      app.config.globalProperties.loader ||
      (() => fetch("./slides.md").then((res) => res.text()));

    const { current, save, reset } = useLoader("slides_code", loader);

    const editor = useEditor();

    const { slides, slideIndex, prev, next, go } = useSlides(
      "slides_index",
      current
    );

    const edit = useStorage("slides_edit", false);
    const menu = ref(false);
    app.component("Icon", Icon);
    app.component("Info", Info);

    app.config.globalProperties = {
      ...app.config.globalProperties,
      prev,
      next,
      go,
      fahrenheit,
      celsius,
      resetFahrenheit,
    };

    return {
      editor,
      current,
      save,
      reset,
      slides,
      slideIndex,
      next,
      prev,
      edit,
      menu,
    };
  },
  template: `
    <div class="grid grid-cols-1" :class="[edit ? 'grid-cols-[1fr_minmax(0,2fr)]' : 'grid-cols-1']">
      <div v-show="edit" class="relative h-screen sticky top-0">
      <textarea
        ref="editor"
        v-model="current"
        class="w-full h-full leading-6 !text-gray-300 bg-gray-900 p-4 text-white font-mono border-none outline-none focus:outline-none"
      />
        <div v-show="edit" class="absolute left-0 bottom-0 right-0 flex justify-end gap-4 text-sm pb-3 pt-6 px-4 bg-gradient-to-t via-gray-900/80 from-gray-900">
          <div class="px-2 py-1 text-white/25 cursor-pointer" @click="reset">Reset</div>
          <div class="px-2 py-1 bg-amber-500 text-white cursor-pointer rounded" @click="save">Save</div>
        </div>
      </div>
      <div>
        <template v-for="slide in slides">
          <div
            v-show="slide.index === slideIndex"
            class="
              p-12
              max-w-none
              min-h-screen
              prose
              prose:body:text-gray-800
              md:prose-lg
              xl:prose-2xl
              prose-p:max-w-[70ch]
              md:prose-h1:text-6xl
              md:prose-h1:tracking-tight
              prose-code:before:content-none
              prose-code:after:content-none
              prose-code:px-1
              prose-code:rounded
              prose-p:before:content-none
              prose-p:after:content-none
              prose-blockquote:border-l-4
              prose-blockquote:border-yellow-400
              prose-blockquote:pl-6
              prose-blockquote:font-normal
              prose-blockquote:not-italic
              prose-blockquote:text-gray-600
              2xl:prose-p:text-3xl
              2xl:prose-p:leading-relaxed
              2xl:prose-p:my-[2.5vw]
              2xl:prose-h1:text-8xl
              2xl:prose-h2:text-6xl
              2xl:prose-h3:text-4xl
              2xl:prose-h4:text-3xl
              2xl:prose-h5:text-2xl
              2xl:prose-code:text-2xl
              2xl:prose-code:leading-[2.5em]
              2xl:prose-pre:p-[2.5vw]
              2xl:prose-pre:max-w-[120ch]
              2xl:prose-li:text-3xl
            "
            :class="[slide.frontmatter?.global.class,slide.frontmatter?.class]"
          >
            <Compiler :code="slide.content" />
          </div>
        </template>
      </div>
    </div>
    <div class="fixed bottom-3 left-3">
      <Icon
        id="bx:pencil"
        class="cursor-pointer "
        :class="[edit ? 'text-amber-500': 'text-black/25']"
        @click="edit = !edit"
      />
    </icon>
    <div v-if="menu" class="not-prose fixed top-0 right-0 bottom-0 w-[80vw] md:w-[25vw] p-6 bg-white shadow">
      <div class="overflow-auto leading-8">
        <div
          v-for="slide in slides.filter(s => s.frontmatter?.title)"
          @click="go(slide.frontmatter.title); menu = false"
          class="cursor-pointer text-gray-700 hover:text-gray-900"
        >
          {{ slide.frontmatter?.title }}
        </div>
      </div>
    </div>
    <div class="fixed right-3 bottom-3 pt-1 px-2 flex text-md bg-white md:bg-transparent rounded md:rounded-none shadow md:shadow-none">
      <Icon id="bx:menu" @click="menu = !menu" class="cursor-pointer" :class="[menu ? 'text-amber-500 hover:text-amber-600' : 'text-black/25 hover:text-black/50']" />
      &ensp;
      <Icon id="bx:left-arrow-alt" class="cursor-pointer text-black/25 hover:text-black/50" @click="prev" />
      <Icon id="bx:right-arrow-alt" class="cursor-pointer text-black/25 hover:text-black/50" @click="next" />
    </div>
  `,
};
