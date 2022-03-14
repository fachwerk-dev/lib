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
    <Header class="sticky top-0 z-50 px-4 md:relative md:px-12" />
    <main v-if="isFrontpage" class="bg-lightblue-500 p-4">
      <Nav
        class="sticky bottom-0 block overflow-auto border-r-2 border-r-gray-100 p-4 pl-0 md:hidden"
      />
      <Hero class="mx-auto max-w-7xl" />
    </main>
    <main
      v-else
      class="mx-auto grid max-w-7xl grid-cols-1 p-4 md:grid-cols-[250px_1fr] md:grid-rows-1"
    >
      <Nav
        v-if="!isFrontpage"
        class="sticky bottom-0 overflow-auto border-r-2 border-r-gray-100 p-4 pl-0 md:pt-12"
      />
      <Content><slot /></Content>
    </main>
  </div>
</template>
