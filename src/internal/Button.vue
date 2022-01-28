<script setup lang="ts">
const { to = null, href = null } = defineProps(["to", "href"]);
</script>

<template>
  <div
    class="not-prose px-5 py-3 border-2 border-black inline-block font-semibold rounded hover:bg-black/5 text-center"
  >
    <router-link v-if="to" :to="to"><slot /></router-link>
    <a v-if="href" :href="href" target="_blank"><slot /></a>
  </div>
</template>
