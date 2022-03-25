<script setup lang="ts">
import { ColorTypes } from "pdf-lib";
import { inject, watch } from "vue";
import processPath from "svgpath";
import type { Context } from "./FPdf.vue";
import { remap } from "../lib.esm";

const { d, transform = "" } = defineProps(["d", "transform"]);
const context = inject("context") as Context;

watch(
  context.pdf,
  () => {
    if (context.page.value && d) {
      let transformedPath = d;
      let transforms = context.transforms;
      if (transform) {
        transforms = [...context.transforms, transform];
      }
      transforms.forEach((t) => {
        transformedPath = processPath(transformedPath).transform(t).toString();
      });
      context.page.value.drawSvgPath(transformedPath, {
        x: 0,
        y: context.height,
        borderWidth: 2,
        borderColor: {
          red: remap(173, 0, 255, 0, 1),
          green: remap(216, 0, 255, 0, 1),
          blue: remap(230, 0, 255, 0, 1),
          type: ColorTypes.RGB,
        },
        //borderColor: { red: 0, green: 0, blue: 0, type: ColorTypes.RGB },
      });
      context.update();
    }
  },
  { immediate: true }
);
</script>

<template />
