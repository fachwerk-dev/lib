<script setup lang="ts">
//@ts-nocheck
// TODO: Refactor tab key handling
import { ref, computed, onMounted } from "vue";
import { atou, utoa } from "../functions/encoding";
import { compileMarkdown } from "../functions/markdown";

import Compiler from "./Compiler.vue";
import IconOpen from "~icons/tabler/layers-subtract";

type Props = {
  source: string;
};
const { source: inputSource } = defineProps<Props>();

const source = ref(atou(inputSource));

const outputSource = computed(() => {
  const r = compileMarkdown(source.value);
  return r;
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

const to = computed(() => `/editor#${utoa(source.value)}`);

const error = ref(null);
const onError = (e: any | null) => (error.value = e);
</script>
<template>
  <div
    class="-mx-6 mb-6 grid grid-cols-1 grid-rows-[33vh_auto] overflow-hidden rounded-none shadow-md shadow-gray-100 md:mx-0 md:grid-cols-[1fr_1.25fr] md:grid-rows-[auto_auto] md:rounded-md"
  >
    <div class="relative flex">
      <textarea
        ref="editor"
        v-model="source"
        class="w-full whitespace-pre bg-gray-800 p-5 font-mono text-sm leading-6 text-gray-100 outline-none md:p-6 lg:p-8"
        spellcheck="false"
      />
      <router-link
        class="absolute left-1 bottom-1 !text-gray-600 hover:!text-gray-400 md:bottom-2 md:left-2"
        :to="to"
        target="_blank"
      >
        <IconEdit class="w-4 stroke-current" />
      </router-link>
    </div>
    <div
      class="relative overflow-x-auto border-l-2 border-white p-4 lg:p-6"
      :class="{ '!border-red-500': error }"
    >
      <Compiler :source="outputSource" @error="onError" />
    </div>
  </div>
</template>
