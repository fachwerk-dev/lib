<script setup lang="ts">
import { computed, onMounted } from "vue";

type Props = {
  modelValue: number;
  value?: number;
};

const { modelValue = 0, value: defaultValue } = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const computedValue = computed({
  get: () => modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

onMounted(() => {
  computedValue.value = modelValue
    ? modelValue
    : defaultValue
    ? defaultValue
    : 0;
});
</script>

<template>
  <input
    type="range"
    v-model.number="computedValue"
    style="display: block; margin: 16px 0"
  />
</template>
