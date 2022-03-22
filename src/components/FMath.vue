<script setup lang="ts">
import { ref, useSlots, watch } from "vue";
import katex from "katex";
import "katex/dist/katex.css";

const math = ref("");
const slots = useSlots();

if (slots && slots.default) {
  watch(
    () => slots.default?.(),
    (nodes) => {
      const node = nodes?.[0].children;
      math.value = katex.renderToString(String.raw`${node}`, {
        throwOnError: false,
      });
    },
    { immediate: true }
  );
}
</script>

<template>
  <span v-if="math" v-html="math" />
</template>
