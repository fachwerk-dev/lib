<script setup lang="ts">
import { ref, watch } from "vue";
import { compileScript, parse } from "@vue/compiler-sfc";
import sfcTemplate from "./CompilerIframe.txt?raw";

const compile = (source: string) => {
  const regex = /(?:<script\s+setup>)([^]*?)(?:<\/script>)/gm;
  const results = [...source.matchAll(regex)][0];

  const sfc = {
    script_setup: results[1].trim(),
    template: source.replace(results[0], "").trim(),
  };

  const stringifySfc = (sfc: any) => {
    return Object.entries(sfc)
      .map(
        ([tag, content]) =>
          `<${tag.replace("_", " ")}>${content}</${tag.split("_")[0]}>`
      )
      .join("");
  };

  const { descriptor } = parse(stringifySfc(sfc));

  const { content } = compileScript(descriptor, {
    id: "CompilerIframe.vue",
    reactivityTransform: true,
    inlineTemplate: true,
  });

  return content.replace("export default {", "const App = {");
};

const { content: inputContent } = defineProps(["content"]);
const srcdoc = ref("");
watch(
  inputContent,
  () => {
    const code = compile(inputContent.value);
    srcdoc.value = sfcTemplate.replace("CODE;", code);
  },
  { immediate: true }
);
</script>

<template>
  <iframe frameborder="0" :srcdoc="srcdoc" />
</template>
