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
    <p class="w-full text-xl !leading-normal md:w-3/4 md:text-2xl lg:text-3xl">
      An upcoming Javascript framework for interactive notebooks and
      presentations built on top of VueJS and ViteJS.
    </p>

    <div class="grid gap-4 md:flex">
      <Button
        class="bg-white hover:bg-white/80 lg:text-xl"
        to="/get-started/vite"
      >
        <IconDocs />
        Play with docs
      </Button>
      <Button
        class="lg:text-xl"
        href="https://editor.fachwerk.dev/#PHNjcmlwdCBzZXR1cD4KY29uc3QgeCA9ICRyZWYoMTApOwo8L3NjcmlwdD4KCiMgSGVsbG8gRmFjaHdlcmsKCiMjIExvY2FsIGRhdGEKCjxmLXNsaWRlciB2LW1vZGVsPSJ4IiAvPgoKPGYtbWF0aD54ID0ge3sgeCB9fTwvZi1tYXRoPgoKIyMgR2xvYmFsIGRhdGEKCjxmLXNsaWRlciB2LW1vZGVsPSJkYXRhLngiIC8+Cgo8Zi1tYXRoPmRhdGEueCA9IHt7IGRhdGEueCB9fTwvZi1tYXRoPgo="
      >
        <IconEdit />
        Try the Fachwerk editor
      </Button>
      <Button class="lg:text-xl" href="https://slides.fachwerk.dev">
        <IconSlides />
        See the slides
      </Button>
    </div>

    <p />

    <p class="w-full md:w-3/4 md:text-lg lg:text-xl">
      To get started, pick a template below:
    </p>

    <div class="grid gap-4 md:flex">
      <Button
        class="lg:text-xl"
        href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vite?file=src%2Findex.md&title=Fachwerk+Vite"
      >
        <IconStackblitz />
        Fachwerk + Vite in Stackblitz
      </Button>
      <Button
        class="lg:text-xl"
        href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vitepress?file=docs%2Findex.md&title=Fachwerk+Vitepress"
      >
        <IconStackblitz />
        Fachwerk + Vitepress in Stackblitz
      </Button>
      <Button
        class="lg:text-xl"
        href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgRmFjaHdlcmsgfSBmcm9tIFwiZmFjaHdlcmtcIlxuICBcbmNvbnN0IGFwcCA9IGdldEN1cnJlbnRJbnN0YW5jZSgpLmFwcENvbnRleHQuYXBwO1xuYXBwLnVzZShGYWNod2VyaylcbiAgXG5jb25zdCB4ID0gJHJlZigxMCk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8Zi1oZWxsbyAvPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuQGltcG9ydCBcImh0dHBzOi8vdW5wa2cuY29tL2ZhY2h3ZXJrL2Rpc3QvZmFjaHdlcmsuY3NzXCJcbjwvc3R5bGU+IiwiaW1wb3J0LW1hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge1xuICAgIFwidnVlXCI6IFwiaHR0cHM6Ly9zZmMudnVlanMub3JnL3Z1ZS5ydW50aW1lLmVzbS1icm93c2VyLmpzXCIsXG4gICAgXCJmYWNod2Vya1wiOiBcImh0dHBzOi8vdW5wa2cuY29tL2ZhY2h3ZXJrL2Rpc3QvZmFjaHdlcmsubWpzXCJcbiAgfVxufSJ9"
      >
        <IconVue />
        Fachwerk in Vue SFC
      </Button>
    </div>

    <p />

    <p class="w-full md:w-3/4 md:text-lg lg:text-xl">
      Alternatively, run the following in the command line:
    </p>

    <div
      class="-mx-4 inline-block rounded-none bg-black px-6 py-4 font-mono text-white md:mx-0 md:place-self-start md:rounded lg:text-lg"
    >
      npm init fachwerk@latest
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
