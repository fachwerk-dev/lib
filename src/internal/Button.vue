<script setup lang="ts">
const { to = null, href = null } = defineProps(["to", "href"]);
</script>

<template>
  <div
    class="not-prose inline-block rounded border-2 border-black px-5 py-3 text-center font-medium hover:bg-black/5"
  >
    <router-link v-if="to" :to="to"><slot /></router-link>
    <a v-if="href" :href="href" target="_blank"><slot /></a>
  </div>
</template>
