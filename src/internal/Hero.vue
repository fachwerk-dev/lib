<script setup lang="ts">
import Button from "./Button.vue";
</script>
<template>
  <article class="grid min-h-screen auto-rows-min gap-4 md:p-12 lg:gap-6">
    <h1 class="mb-4 text-5xl font-bold tracking-tighter md:mb-0 md:text-6xl">
      ▦ Fachwerk
    </h1>
    <p class="w-full text-xl md:w-3/4 md:text-2xl">
      An upcoming Javascript framework for interactive notebooks and
      presentations built on top of VueJS and ViteJS.
    </p>
    <p />
    <div class="grid gap-4 md:flex">
      <Button class="bg-white" to="/get-started/vite">Read the docs</Button>
      <Button href="https://editor.fachwerk.dev">Try the online editor</Button>
      <Button
        href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vite?file=src%2Findex.md&title=Fachwerk+Vite"
      >
        Open in StackBlitz
      </Button>
    </div>

    <p />

    <p class="w-full md:w-3/4 md:text-lg">
      Alternatively, run the following in the command in the terminal to get
      started with starter templates:
    </p>
    <div
      class="inline-block rounded bg-black px-6 py-4 font-mono text-white md:place-self-start"
    >
      npm init fachwerk
    </div>

    <p class="h-6" />

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 xl:w-3/4">
      <div class="grid gap-4">
        <h2 class="text-xl font-semibold">Declarative delight</h2>
        <p>
          Fachwerk is composed of VueJS components that allow simple HTML-like
          tags for complex visualizations.
        </p>
      </div>
      <div class="grid gap-4">
        <h2 class="text-xl font-semibold">Sophisticated state</h2>
        <p>
          All elements on the page can talk to the other elements, either via
          the global state for values or with a global event bus for events.
        </p>
      </div>
      <div class="grid gap-4">
        <h2 class="text-xl font-semibold">Useful utilites</h2>
        <p>
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
