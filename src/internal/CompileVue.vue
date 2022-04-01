<script setup lang="ts">
import { debouncedWatch } from "@vueuse/core";
import { ref, watch } from "vue";
import { compileSfc } from "./compile";
import template from "./CompileVue.htm?raw";

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
  { immediate: true, debounce: 300 }
);
</script>

<template>
  <iframe
    class="h-[75vh] w-full"
    :srcdoc="srcdoc"
    frameborder="0"
    scrolling="no"
  />
</template>
