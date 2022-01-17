<script setup lang="ts">
import { onBeforeUpdate, onMounted, provide, ref } from "vue";

const canvasEl = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const updated = ref(false);
const width = 100;
const height = 100;

export type Context = {
  width: number;
  height: number;
  ctx: typeof ctx;
  updated: typeof updated;
  update: Function;
};

const context: Context = {
  width,
  height,
  ctx,
  updated,
  update: () => {
    if (ctx.value) {
      ctx.value.clearRect(0, 0, width, height);
    }
  },
};

onMounted(() => {
  if (canvasEl.value) {
    context.ctx.value = canvasEl.value.getContext("2d");
  }
});

onBeforeUpdate(() => {
  context.update();
  context.updated.value = !context.updated.value;
});

provide("context", context);
</script>

<template>
  <canvas ref="canvasEl" :width="width" :height="height">
    <slot />
  </canvas>
</template>
