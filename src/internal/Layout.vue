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
    <Header class="md:relative sticky top-0 z-50" />
    <main v-if="isFrontpage" class="">
      <Hero />
      <Content><slot /></Content>
    </main>
    <main
      v-else
      class="grid md:grid-cols-[250px_1fr] grid-cols-1 md:grid-rows-1 grid-rows-[100vh_2fr]"
    >
      <Nav
        v-if="!isFrontpage"
        class="bottom-0 p-4 md:p-8 shadow-xl overflow-auto sticky"
      />
      <Content><slot /></Content>
    </main>
  </div>
</template>
