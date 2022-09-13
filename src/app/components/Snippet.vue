<script setup lang="ts">
import { ref } from "vue";

const { src } = defineProps(["src"]);
const file = ref("");

fetch(src)
  .then((res) => res.text())
  .then((res) => (file.value = res));
</script>

<template>
  <pre><code>{{ file }}</code></pre>
</template>
