<script setup lang="ts">
import Header from "../components/Header.vue";
import Nav from "../components/Nav.vue";
import Content from "../components/Content.vue";
</script>

<template>
  <div class="bg-lightblue-500 min-h-screen">
    <Header class="sticky top-0 z-50 md:relative" />
    <main class="bg-lightblue-500 mx-auto max-w-7xl">
      <div class="isFrontpage block md:hidden">
        <Nav class="sticky bottom-0 overflow-auto bg-white p-4" />
      </div>
      <Content class="max-w-[100ch] p-5 md:p-12"><slot /></Content>
    </main>
  </div>
</template>
