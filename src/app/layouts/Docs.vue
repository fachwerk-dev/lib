<script setup lang="ts">
import Header from "../components/Header.vue";
import Nav from "../components/Nav.vue";
import Content from "../components/Content.vue";
</script>

<template>
  <div>
    <Header class="sticky top-0 z-50 md:relative" />
    <main
      class="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[250px_1fr] md:grid-rows-1"
    >
      <div class="border-r-2 border-r-gray-100 p-4 md:p-12">
        <Nav class="sticky bottom-0 overflow-auto" />
      </div>
      <Content class="max-w-[100ch] p-5 md:p-12"><slot /></Content>
    </main>
  </div>
</template>
