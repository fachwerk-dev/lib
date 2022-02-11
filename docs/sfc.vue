<script setup lang="ts">
import { compileTemplate, compileScript } from "@vue/compiler-sfc";
import { ref, watch } from "vue";
import { SFCDescriptor } from "vue/compiler-sfc";
import template from "./sfc.txt?raw";

import { ref as _ref } from "vue";

const setup = `const a = $ref(); const b = $compiled(() => a + 1);const c = 10`;
const content = compileScript(
  {
    filename: "Compiler.vue",
    scriptSetup: {
      type: "script",
      // setup: setup,
      content: setup,
      attrs: null,
      loc: { start: { offset: 0 }, end: { offset: 0 } },
    },
    template: {
      type: "template",
      ast: null,
      content: "",
      attrs: null,
      loc: null,
    },
    script: null,
    source: setup,
    styles: null,
    customBlocks: null,
    cssVars: [],
    slotted: null,
    shouldForceReload: null,
  } as SFCDescriptor,
  { id: "id", reactivityTransform: true }
);
console.log(content);
console.log(content.content);
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
const id = "FCompiler.vue";

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
</script>

<template>
  <div class="flex w-full border-2 border-red-500">
    <textarea
      class="w-full whitespace-pre bg-gray-800 p-5 font-mono text-sm leading-6 text-gray-100 outline-none md:p-6 lg:p-8"
      v-model="source"
    />
    <iframe
      class="w-full whitespace-pre p-5 font-mono text-sm leading-6 text-gray-100 outline-none md:p-6 lg:p-8"
      frameborder="0"
      :srcdoc="srcdoc"
    />
  </div>
</template>
