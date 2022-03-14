<script setup lang="ts">
import Button from "./Button.vue";
</script>
<template>
  <article class="grid min-h-screen auto-rows-min gap-4 py-4 md:py-12 lg:gap-6">
    <h1
      class="mb-4 text-5xl font-bold tracking-tighter md:mb-0 md:text-6xl lg:text-7xl"
    >
      ▦ Fachwerk
    </h1>
    <p class="w-full text-xl md:w-3/4 md:text-2xl lg:text-3xl">
      An upcoming Javascript framework for interactive notebooks and
      presentations built on top of VueJS and ViteJS.
    </p>
    <p />
    <div class="grid gap-4 md:flex">
      <Button class="bg-white lg:text-xl" to="/get-started/vite"
        >Read the docs</Button
      >
      <Button class="lg:text-xl" href="https://editor.fachwerk.dev"
        >Try the online editor</Button
      >
      <Button
        class="lg:text-xl"
        href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vite?file=src%2Findex.md&title=Fachwerk+Vite"
      >
        Open in StackBlitz
      </Button>
    </div>

    <p />

    <p class="w-full md:w-3/4 md:text-lg lg:text-xl">
      Alternatively, run the following in the command in the terminal to get
      started with starter templates:
    </p>
    <div
      class="-mx-4 inline-block rounded-none bg-black px-8 py-6 font-mono text-white md:mx-0 md:place-self-start md:rounded lg:text-lg"
    >
      npm init fachwerk
    </div>

    <p class="h-6" />

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 xl:w-3/4">
      <div class="grid gap-4">
        <h2 class="text-xl font-semibold lg:text-2xl">Declarative delight</h2>
        <p class="lg:text-xl">
          Fachwerk is composed of VueJS components that allow simple HTML-like
          tags for complex visualizations.
        </p>
      </div>
      <div class="grid gap-4">
        <h2 class="text-xl font-semibold lg:text-2xl">Sophisticated state</h2>
        <p class="lg:text-xl">
          All elements on the page can talk to the other elements, either via
          the global state for values or with a global event bus for events.
        </p>
      </div>
      <div class="grid gap-4">
        <h2 class="text-xl font-semibold lg:text-2xl">Useful utilites</h2>
        <p class="lg:text-xl">
          There is wide range of JS utility functions available, from array
          manipulations to color calculations.
        </p>
      </div>
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
