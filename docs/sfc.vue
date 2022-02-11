<script setup lang="ts">
import { compileTemplate } from "@vue/compiler-sfc";
import template from "./sfc.txt?raw";
const source = `
  <f-slider v-model="f.a" />
  {{ f.a }}
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
