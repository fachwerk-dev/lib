<script setup lang="ts">
import { computed } from "vue";

import CompilerVue from "./CompilerVue.vue";
import CompilerMd from "./CompilerMd.vue";
import { isScriptSetup } from "./compiler";

const { source } = defineProps(["source"]);

const component = computed(() =>
  isScriptSetup(source) ? CompilerVue : CompilerMd
);

const style = computed(() =>
  isScriptSetup(source) ? { width: "100%", height: "100vh" } : null
);
</script>

<template>
  <component
    :is="component"
    :source="source"
    @error="$emit('error')"
    :style="style"
  />
</template>
