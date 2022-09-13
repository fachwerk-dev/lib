<script setup lang="ts">
import Button from "./Button.vue";
import IconDocs from "~icons/bx/book-content";
import IconEdit from "~icons/bx/pencil";
import IconSlides from "~icons/bx/slideshow";
</script>
<template>
  <article class="grid min-h-screen auto-rows-min gap-4 md:py-20 lg:gap-6">
    <h1
      class="mb-4 text-5xl font-bold tracking-tighter md:mb-0 md:text-6xl lg:text-7xl"
    >
      ▦ Fachwerk
    </h1>
    <p class="w-full text-lg !leading-normal md:w-3/4 md:text-xl lg:text-2xl">
      An upcoming Javascript framework for interactive notebooks and
      presentations
    </p>

    <div class="grid gap-4 md:flex">
      <router-link to="/get-started/vite">
        <Button class="bg-white hover:bg-white/80 md:text-xl">
          <IconDocs />
          Play with the docs
        </Button>
      </router-link>
      <Button
        class="bg-white hover:bg-white/80 md:text-xl"
        href="https://editor.fachwerk.dev"
      >
        <IconEdit />
        Try the editor
      </Button>
      <Button
        class="bg-white hover:bg-white/80 md:text-xl"
        href="https://slides.fachwerk.dev"
      >
        <IconSlides />
        See the slides
      </Button>
    </div>

    <p />

    <p class="w-full md:w-3/4 md:text-lg lg:text-xl">
      If you have NodeJS installed, you can also run the following:
    </p>

    <div
      class="-mx-4 inline-block rounded-none bg-black px-6 py-4 font-mono text-white md:mx-0 md:place-self-start md:rounded lg:text-lg"
    >
      npm init fachwerk
    </div>

    <p class="h-12" />
    <p class="text-slate-500">
      All code is licenced under
      <a href="https://choosealicense.com/licenses/mit/">MIT licence. </a>
      <br class="hidden md:inline" />
      All content is licenced under
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        Creative Commons BY-NC-SA 4.0 International License.
      </a>
    </p>
  </article>
</template>
