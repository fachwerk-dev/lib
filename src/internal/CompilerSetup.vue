<script setup lang="ts">
import { ref, watch } from "vue";
import { compilerSetup } from "./compiler";
import template from "./CompilerSetup.txt?raw";

const { content } = defineProps(["content"]);
const srcdoc = ref("");
const iframeRef = ref<HTMLIFrameElement | null>(null);

watch(
  [() => content, () => iframeRef.value],
  () => {
    const code = compilerSetup(content);
    srcdoc.value = template.replace("CODE;", code);
  },
  { immediate: true }
);
</script>

<template>
  <iframe
    ref="iframeRef"
    frameborder="0"
    :srcdoc="srcdoc"
    class="h-screen md:h-[75vh]"
  />
</template>
