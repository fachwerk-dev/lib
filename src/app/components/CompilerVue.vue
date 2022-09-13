<script setup lang="ts">
import { debouncedWatch } from "@vueuse/core";
import { ref } from "vue";
import { compileSfc } from "../functions/compiler";
import template from "./CompilerVue.htm?raw";

const { source } = defineProps(["source"]);
const emit = defineEmits(["error"]);
const srcdoc = ref("");

debouncedWatch(
  () => source,
  () => {
    const { code, errors } = compileSfc(source);
    if (errors.length) {
      emit("error", errors);
    }
    srcdoc.value = template.replace("CODE;", code);
  },
  { immediate: true, debounce: 500 }
);
</script>

<template>
  <iframe :srcdoc="srcdoc" frameborder="0" scrolling="no" />
</template>
