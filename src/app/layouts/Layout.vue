<script setup lang="ts">
import frontpage from "./Frontpage.vue";
import docs from "./Docs.vue";

const { frontmatter } = defineProps(["frontmatter"]);

const layouts: any = { frontpage, docs };
const layout = frontmatter?.layout || "docs";
</script>

<template>
  <component :is="layouts[layout]"><slot /></component>
</template>
