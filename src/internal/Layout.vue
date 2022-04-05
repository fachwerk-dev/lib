<script setup lang="ts">
import Header from "./Header.vue";
import Hero from "./Hero.vue";
import Nav from "./Nav.vue";
import Content from "./Content.vue";

const { frontmatter } = defineProps(["frontmatter"]);
const isFrontpage = frontmatter?.layout === "frontpage";
</script>

<template>
  <div :class="{ 'bg-lightblue-500': isFrontpage }">
    <Header class="sticky top-0 z-50 md:relative" />
    <Hero
      v-if="isFrontpage"
      class="mx:px-12 mx-auto max-w-7xl p-4 px-4 md:p-12"
    />
    <main
      class="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[250px_1fr] md:grid-rows-1"
    >
      <div
        :class="isFrontpage ? 'isFrontpage block md:hidden' : ''"
        class="border-r-2 border-r-gray-100 p-4 md:p-12"
      >
        <Nav class="sticky bottom-0 overflow-auto" />
      </div>
      <Content class="max-w-[100ch] p-5 md:p-12"><slot /></Content>
    </main>
  </div>
  Lay
</template>
