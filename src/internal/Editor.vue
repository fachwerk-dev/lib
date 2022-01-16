<script setup lang="ts">
//@ts-nocheck
import { ref, computed, onMounted } from "vue";
import Compiler from "./Compiler.vue";
import MarkdownIt from "markdown-it";

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
</script>
<template>
  <div
    class="grid md:grid-cols-2 grid-cols-1 md:grid-rows-[auto_auto] grid-rows-[33vh_auto] shadow-md shadow-gray-100 rounded-md overflow-hidden mb-6"
  >
    <textarea
      ref="editor"
      v-model="content"
      class="outline-none w-full font-mono text-sm whitespace-pre bg-gray-800 text-gray-100 p-4 lg:p-7 leading-6 min-h-12"
    />
    <div class="p-4 lg:p-6 overflow-x-auto">
      <Compiler :content="outputContent" />
    </div>
  </div>
</template>
