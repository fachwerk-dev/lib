<script setup lang="ts">
import { ref, watch } from "vue";
import { compilerSetup } from "./compiler";
import template from "./CompilerSetup.txt?raw";

const { content } = defineProps(["content"]);
const srcdoc = ref("");

watch(
  () => content,
  () => {
    const code = compilerSetup(content);
    srcdoc.value = template.replace("CODE;", code);
  },
  { immediate: true }
);
</script>

<template><iframe frameborder="0" :srcdoc="srcdoc" /></template>
