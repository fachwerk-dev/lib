<script setup lang="ts">
import { compileTemplate } from "@vue/compiler-sfc";
import template from "./sfc.txt?raw";
const source = `
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

{{ hsl(f.h,100,50) }}
`;
const id = "FCompiler.vue";
const { code } = compileTemplate({ source, id, filename: id });
const srcdoc = template.replace("CODE", code);
</script>

<template>
  <div>
    <iframe frameborder="0" :srcdoc="srcdoc" />
  </div>
</template>
