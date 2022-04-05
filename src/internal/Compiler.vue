<script setup lang="ts">
import { computed } from "vue";

import CompilerVue from "./CompilerVue.vue";
import CompilerMd from "./CompilerMd.vue";
import { isScriptSetup } from "./compiler";

const { source } = defineProps(["source"]);

const component = computed(() =>
  isScriptSetup(source) ? CompilerVue : CompilerMd
);
</script>

<template>
  <component :is="component" :source="source" @error="$emit('error')" />
</template>
