<script lang="ts">
import { computed, h, compile, ComponentOptions, defineComponent } from "vue";
import { utils } from "../lib.es";

export const compileSource = (source: string) => {
  const errors = [];
  let code = null;
  try {
    const compiledCode = compile(source, {
      onError: (err: any) => {
        errors.push(err);
      },
    });
    code = compiledCode;
  } catch (e) {
    errors.push(e);
  }
  return { code, errors };
};

export default {
  props: ["content"],
  setup(props: any) {
    const errors: any[] = [];
    const compiledContent = computed(() => {
      const { code } = compileSource(props.content);
      return {
        setup() {
          return { ...utils };
        },
        render: code,
      };
    });
    return () =>
      errors.length
        ? errors
            .map(String)
            .map((e) => h("div", { style: { color: "red" } }, e))
        : h(compiledContent.value as ComponentOptions);
  },
};
</script>
