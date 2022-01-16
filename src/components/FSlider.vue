<script setup lang="ts">
import { computed } from "vue";

type Props = {
  modelValue: number;
};

const { modelValue = 0 } = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const progress = computed({
  get: () => modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

emit("update:modelValue", modelValue);
</script>

<template>
  <input type="range" v-model.number="progress" />
</template>
