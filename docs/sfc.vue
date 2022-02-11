<script setup lang="ts">
import { compileTemplate, compileScript, parse } from "@vue/compiler-sfc";
import { onErrorCaptured, ref, watch } from "vue";
import sfcTemplate from "./sfcTemplate.txt?raw";
import sfcCode from "./sfcCode.txt?raw";

const id = "FCompiler.vue";

const compile = (source) => {
  const regex = /(?:<script\s+setup>)([^]*?)(?:<\/script>)/gm;
  const results = [...source.matchAll(regex)][0];

  const sfc = {
    script_setup: results[1].trim(),
    template: source.replace(results[0], "").trim(),
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

  const { content } = compileScript(descriptor, {
    reactivityTransform: true,
    id: "id",
    inlineTemplate: true,
    // templateOptions: {
    //   compilerOptions: {
    //     onError: (err: any) => {
    //       console.log(err);
    //     },
    //   },
    // },
  });

  return content.replace("export default {", "const App = {");
};

const source = ref(sfcCode);
const srcdoc = ref("");
watch(
  source,
  () => {
    const code = compile(source.value);
    srcdoc.value = sfcTemplate.replace("CODE", code);
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
