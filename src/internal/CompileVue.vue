<script setup lang="ts">
import { ref, watch } from "vue";
import { compileSfc } from "./compile";
import template from "./CompileVue.htm?raw";

const { source } = defineProps(["source"]);
const emit = defineEmits(["error"]);
const srcdoc = ref("");

watch(
  () => source,
  () => {
    const { code, errors } = compileSfc(source);
    if (errors.length) {
      emit("error", errors);
    }
    srcdoc.value = template.replace("CODE;", code);
  },
  { immediate: true }
);
</script>

<template>
  <iframe
    style="width: 100%; height: auto; border: 1px solid red"
    scrolling="no"
    frameborder="0"
    :srcdoc="srcdoc"
  />
</template>
