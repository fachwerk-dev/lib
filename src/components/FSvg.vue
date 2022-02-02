<script setup lang="ts">
import { computed, ref } from "vue";

const {
  width = 300,
  height = 300,
  padding = 0,
  centered = false,
} = defineProps<{
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  centered?: boolean;
}>();

const svgRef = ref(null);

const svgData = computed(() => {
  const p = parseFloat(String(padding));
  const w = parseFloat(String(width)) + p * 2;
  const h = parseFloat(String(height)) + p * 2;
  const viewBox = centered
    ? `-${w / 2} -${h / 2} ${w} ${h}`
    : `-${p} -${p} ${w} ${h}`;
  const style = {
    maxWidth: `${w}px`,
  };
  return { viewBox, style };
});
</script>

<template>
  <p>
    <svg
      ref="svgRef"
      xmlns="http://www.w3.org/2000/svg"
      :view-box.camel="svgData.viewBox"
      :style="svgData.style"
    >
      <slot />
    </svg>
  </p>
</template>
