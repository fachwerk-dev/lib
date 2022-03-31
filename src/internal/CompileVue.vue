<script setup lang="ts">
import { ref, watch } from "vue";
import { compileVue } from "./compile";
import template from "./CompileVue.htm?raw";

const { source } = defineProps(["source"]);
const emit = defineEmits(["error"]);
const srcdoc = ref("");
const iframeRef = ref<HTMLIFrameElement | null>(null);

watch(
  () => source,
  () => {
    const { code, errors } = compileVue(source);
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
    ref="iframeRef"
    frameborder="0"
    :srcdoc="srcdoc"
    class="h-screen md:h-[75vh]"
  />
</template>
