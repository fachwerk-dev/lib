<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import { compilerSetup } from "./compiler";
import template from "./CompilerSetup.txt?raw";

const { content } = defineProps(["content"]);
const srcdoc = ref("");
const iframeRef = ref<HTMLIFrameElement | null>(null);
const height = ref("");

watch(
  [() => content, () => iframeRef.value],
  () => {
    const code = compilerSetup(content);
    srcdoc.value = template.replace("CODE;", code);
    const frameHeight =
      iframeRef.value?.contentWindow?.document.body.scrollHeight;
    console.log(frameHeight);
  },
  { immediate: true }
);
</script>

<template>
  <iframe ref="iframeRef" frameborder="0" :srcdoc="srcdoc" class="h-[75vh]" />
</template>
