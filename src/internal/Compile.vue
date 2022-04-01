<script setup lang="ts">
import { computed } from "vue";

import CompileVue from "./CompileVue.vue";
import CompileMd from "./CompileMd.vue";
import { isScriptSetup } from "./compile";

const { source } = defineProps(["source"]);

const component = computed(() =>
  isScriptSetup(source) ? CompileVue : CompileMd
);
</script>

<template>
  <component :is="component" :source="source" @error="$emit('error')" />
</template>
