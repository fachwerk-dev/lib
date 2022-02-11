<script setup lang="ts">
//@ts-nocheck
import { ref, computed, onMounted } from "vue";
import MarkdownIt from "markdown-it";
import IconOpen from "~icons/tabler/layers-subtract";
import { format } from "prettier";
import parserHtml from "prettier/esm/parser-html.mjs";
import parserMarkdown from "prettier/esm/parser-markdown.mjs";

import Compiler from "./Compiler.vue";
import { atou, utoa } from "../internal/encoding";

const { content: inputContent } = defineProps(["content"]);
const content = ref(atou(inputContent));

function editorPlugin(md) {
  md.renderer.rules.code_inline = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    return tokens[idx].content;
  };
  md.renderer.rules.code_block = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    return tokens[idx].content;
  };
  return md;
}

const md = new MarkdownIt({ linkify: true, html: true, breaks: true }).use(
  editorPlugin
);

const prettierContent = (str) => {
  return format(content.value, {
    parser: "html",
    plugins: [parserHtml],
    printWidth: 30,
  });
};

const outputContent = computed(() => {
  return prettierContent(md.render(content.value));
});
const editor = ref<HTMLTextAreaElement | null>(null);

onMounted(() => {
  if (editor?.value) {
    editor.value.onkeydown = function (e) {
      if (e.keyCode === 9) {
        const val = this.value;
        const start = this.selectionStart;
        const end = this.selectionEnd;
        this.value = val.substring(0, start) + "  " + val.substring(end);
        this.selectionStart = this.selectionEnd = start + 2;
        return false;
      }
    };
  }
});

const link = computed(
  () => `https://editor.fachwerk.dev/#${utoa(content.value)}`
);

const error = ref(null);
const onError = (e: CompilerError[] | null) => (error.value = e);
</script>
<template>
  <div
    class="-mx-5 mb-6 grid grid-cols-1 grid-rows-[33vh_auto] overflow-hidden rounded-none shadow-md shadow-gray-100 md:mx-0 md:grid-cols-2 md:grid-rows-[auto_auto] md:rounded-md"
  >
    <div class="min-h-12 relative flex">
      <textarea
        ref="editor"
        v-model="content"
        class="w-full whitespace-pre bg-gray-800 p-5 font-mono text-sm leading-6 text-gray-100 outline-none md:p-6 lg:p-8"
      />
      <a
        class="absolute top-1 right-1 !text-gray-600 hover:!text-gray-400 md:top-2 md:right-2"
        :href="link"
        target="_blank"
      >
        <IconOpen class="w-4 stroke-current" />
      </a>
    </div>
    <div
      class="overflow-x-auto border-l-2 border-white p-4 lg:p-6"
      :class="{ '!border-red-500': error }"
    >
      <Compiler :content="outputContent" @error="onError" />
      <button @click="() => (content = prettierContent(content))">
        prettier
      </button>
    </div>
  </div>
</template>
