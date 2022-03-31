<script setup lang="ts">
import { ref, watch } from "vue";
import { compileSetup } from "./compiler";
import template from "./CompileVue?raw";

const { content } = defineProps(["content"]);
const srcdoc = ref("");
const iframeRef = ref<HTMLIFrameElement | null>(null);

watch(
  () => content,
  () => {
    const code = compileSetup(content);
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
