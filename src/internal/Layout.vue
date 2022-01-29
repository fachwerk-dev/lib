<script setup lang="ts">
import Header from "./Header.vue";
import Hero from "./Hero.vue";
import Nav from "./Nav.vue";
import Content from "./Content.vue";

const { frontmatter } = defineProps(["frontmatter"]);
const isFrontpage = frontmatter?.layout === "frontpage";
</script>

<template>
  <div>
    <Header class="sticky top-0 z-50 md:relative" />
    <main v-if="isFrontpage" class="">
      <Hero />
      <!-- <Content><slot /></Content> -->
    </main>
    <main
      v-else
      class="grid grid-cols-1 grid-rows-[100vh_2fr] md:grid-cols-[250px_1fr] md:grid-rows-1"
    >
      <Nav
        v-if="!isFrontpage"
        class="sticky bottom-0 overflow-auto border-r-2 border-r-gray-100 p-4 md:p-8"
      />
      <Content><slot /></Content>
    </main>
  </div>
</template>
