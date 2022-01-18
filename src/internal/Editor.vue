<script setup lang="ts">
//@ts-nocheck
import { ref, computed, onMounted } from "vue";
import Compiler from "./Compiler.vue";
import MarkdownIt from "markdown-it";
import IconOpen from "~icons/tabler/layers-subtract";

const { content: inputContent } = defineProps(["content"]);

const content = ref(inputContent);
const md = new MarkdownIt({ linkify: true, html: true, breaks: true });
const outputContent = computed(() => md.render(content.value));
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

function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)));
}

function atou(base64: string): string {
  return decodeURIComponent(escape(atob(base64)));
}
console.log(utoa("1"), "MQ==");
const link = computed(
  () => `https://editor.fachwerk.dev/#${utoa(content.value)}`
);
</script>
<template>
  <div
    class="grid md:grid-cols-2 grid-cols-1 md:grid-rows-[auto_auto] grid-rows-[33vh_auto] shadow-md shadow-gray-100 rounded-md overflow-hidden mb-6"
  >
    <div class="relative flex min-h-12">
      <textarea
        ref="editor"
        v-model="content"
        class="outline-none w-full font-mono text-sm whitespace-pre bg-gray-800 text-gray-100 p-6 lg:p-8 leading-6"
      />
      <a
        class="absolute md:top-2 md:right-2 top-1 right-1 !text-gray-600 hover:!text-gray-400"
        :href="link"
        target="_blank"
      >
        <IconOpen class="w-4 stroke-current" />
      </a>
    </div>
    <div class="p-4 lg:p-6 overflow-x-auto">
      <Compiler :content="outputContent" />
    </div>
  </div>
</template>
