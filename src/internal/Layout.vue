<script setup lang="ts">
import Header from "./Header.vue";
import Nav from "./Nav.vue";
</script>

<template>
  <Header />
  <main
    class="grid md:grid-cols-[250px_1fr] grid-cols-1 grid-rows-[30vh_1fr] md:grid-rows-1 min-h-screen"
  >
    <Nav class="bottom-0 p-4 md:p-8 shadow-xl overflow-auto" />
    <article
      class="max-w-none p-5 md:p-12 prose prose-headings:text-gray-600 prose-strong:font-medium prose-a:text-sky-600 prose-a:underline prose-a:underline-offset-2 prose-a:break-words prose-pre:text-sm prose-pre:bg-sky-100 prose-pre:p-4 lg:prose-pre:p-6 prose-code:before:content-none prose-code:after:content-none prose-code:text-sky-700 prose-code:bg-sky-100 prose-code:font-normal prose-code:px-[0.2em] prose-code:py-[0.1em] prose-p:before:content-none prose-p:after:content-none prose-p:mt-0 prose-blockquote:border-l-4 prose-blockquote:border-yellow-400 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:pl-6 prose-p:w-auto lg:prose-p:w-[64ch] prose-lead:w-[64ch]"
    >
      <slot />
    </article>
  </main>
</template>
