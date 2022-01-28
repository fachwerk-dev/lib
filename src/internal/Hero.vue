<script setup lang="ts">
import Button from "./Button.vue";
</script>
<template>
  <article class="grid gap-4 bg-sky-500 p-5 md:p-12">
    <h1 class="mb-4 text-5xl font-bold tracking-tighter md:mb-0 md:text-6xl">
      ▦ Fachwerk
    </h1>
    <p class="text-xl md:text-2xl">
      VueJS and Markdown framework for creating interactive learning materials
    </p>
    <p />
    <div class="grid gap-4 md:flex">
      <Button class="bg-white" to="/get-started/vite">Read the docs</Button>
      <Button href="https://editor.fachwerk.dev">Try the online editor</Button>
      <Button
        href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vite?file=src%2Findex.md&title=Fachwerk+Vite"
        >Open in StackBlitz</Button
      >
    </div>

    <p />

    <p class="w-full md:w-3/4 md:text-lg">
      Alternatively, run the following in the command in the terminal to get
      started with ViteJS, Vitepress or other starter templates.
    </p>
    <div
      class="inline-block rounded bg-black px-6 py-4 font-mono text-white md:place-self-start"
    >
      npm init fachwerk
    </div>

    <p class="h-6" />

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
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
  </article>
</template>
