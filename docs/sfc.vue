<script setup lang="ts">
import { compileTemplate, compileScript, parse } from "@vue/compiler-sfc";
import { ref, watch } from "vue";
import template from "./sfc.txt?raw";
import str from "./sfc2.txt?raw";

const id = "FCompiler.vue";

const regex = /(?:<script\s+setup>)([^]*?)(?:<\/script>)/gm;
const results = [...str.matchAll(regex)][0];
const sfc = {
  script_setup: results[1].trim(),
  template: str.replace(results[0], "").trim(),
};

const stringifySfc = (sfc) => {
  return Object.entries(sfc)
    .map(
      ([tag, content]) =>
        `<${tag.replace("_", " ")}>${content}</${tag.split("_")[0]}>`
    )
    .join("");
};

const { descriptor } = parse(stringifySfc(sfc));

const { content: scriptContent } = compileScript(descriptor, {
  reactivityTransform: true,
  id: "id",
});

const { code: templateContent } = compileTemplate({
  source: sfc.template,
  id,
  filename: id,
});

const content = `
${templateContent}
${scriptContent.replace(
  "export default {",
  `const App = {
  render,`
)}
`;

const srcdoc = ref("");

srcdoc.value = template.replace("CONTENT", content);

/*
const source = ref(`
<svg width="360" height="50">
  <rect
    v-for="h in range(0,360)"
    :x="h"
    y="0"
    width="1"
    height="50"
    :fill="hsl(h,100,50)"
    v-on:mouseover="f.h = h"
  />
</svg>

<br />

{{ a }}
{{ hsl(f.h,100,50) }}
`);

const srcdoc = ref("");
watch(
  source,
  () => {
    const { code } = compileTemplate({
      source: source.value,
      id,
      filename: id,
    });
    srcdoc.value = template.replace("CODE", code);
  },
  { immediate: true }
);
*/
</script>

<template>
  <div class="flex w-full border-2 border-red-500">
    <!-- <textarea
      class="w-full whitespace-pre bg-gray-800 p-5 font-mono text-sm leading-6 text-gray-100 outline-none md:p-6 lg:p-8"
      v-model="source"
    /> -->
    <iframe
      class="w-full whitespace-pre p-5 font-mono text-sm leading-6 text-gray-100 outline-none md:p-6 lg:p-8"
      frameborder="0"
      :srcdoc="srcdoc"
    />
  </div>
</template>
