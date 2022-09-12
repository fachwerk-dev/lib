<script setup lang="ts">
import { Group } from "three";
import { inject, provide, useSlots, watch } from "vue";
import type { Context } from "./FThree.vue";

const slots = useSlots();

const { scene, update } = inject("context") as Context;
const mesh = new Group();
scene.add(mesh);
provide("context", { scene: mesh, update });

if (slots && slots.default) {
  watch(
    () => slots.default?.(),
    () => {
      update();
    },
    { immediate: true }
  );
}
defineExpose({ mesh, update });
</script>

<template>
  <slot />
</template>
