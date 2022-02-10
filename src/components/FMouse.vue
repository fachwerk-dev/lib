<script setup lang="ts">
import { ref, watch } from "vue";
import { useMouseInElement, useMousePressed } from "@vueuse/core";

type Props = {
  modelValue: any;
};

type Mouse = {
  x: number;
  y: number;
};

defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const target = ref(null);

const { elementX, elementY } = useMouseInElement(target);
const { pressed } = useMousePressed({ target });

watch(
  [elementX, elementY, pressed],
  () => {
    emit("update:modelValue", {
      x: elementX.value,
      y: elementY.value,
      pressed: pressed.value,
    });
  },
  { immediate: true }
);
</script>

<template>
  <div ref="target"><slot /></div>
</template>
