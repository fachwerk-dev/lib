<script setup lang="ts">
import { inject, watch } from "vue";
import svgpath from "svgpath";

import type { Context } from "./FCanvas.vue";

const {
  path = "",
  opacity = 1,
  rotate = 0,
} = defineProps(["path", "opacity", "rotate"]);

const context = inject("context") as Context;

watch(
  [context.ctx, context.updated, () => path],
  () => {
    if (context.ctx?.value && path) {
      const rotatedPath = svgpath(path).rotate(rotate).toString();
      const p = new Path2D(rotatedPath);

      context.ctx.value?.save();
      context.ctx.value.globalAlpha = opacity;
      context.ctx.value?.fill(p);
      context.ctx.value?.restore();
    }
  },
  { immediate: true }
);
</script>

<template />
