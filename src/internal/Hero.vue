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
      To get started, pick a Stackblitz template
    </p>

    <div class="grid gap-4 md:flex">
      <Button
        class="lg:text-xl"
        href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vite?file=src%2Findex.md&title=Fachwerk+Vite"
      >
        <IconStackblitz />
        Fachwerk + Vite
      </Button>
      <Button
        class="lg:text-xl"
        href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vitepress?file=docs%2Findex.md&title=Fachwerk+Vitepress"
      >
        <IconStackblitz />
        Fachwerk + Vitepress
      </Button>
      <Button
        class="lg:text-xl"
        href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgRmFjaHdlcmsgfSBmcm9tIFwiZmFjaHdlcmtcIlxuICBcbmNvbnN0IGFwcCA9IGdldEN1cnJlbnRJbnN0YW5jZSgpLmFwcENvbnRleHQuYXBwO1xuYXBwLnVzZShGYWNod2VyaylcbiAgXG5jb25zdCB4ID0gJHJlZigxMCk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aDE+SGVsbG8gRmFjaHdlcms8L2gxPlxuICA8aDI+TG9jYWwgZGF0YTwvaDI+XG4gIDxmLXNsaWRlciB2LW1vZGVsPVwieFwiIC8+XG4gIDxiciAvPlxuICA8Zi1tYXRoPnggPSB7eyB4IH19PC9mLW1hdGg+XG4gIDxoMj5HbG9iYWwgZGF0YTwvaDI+XG4gIDxmLXNsaWRlciB2LW1vZGVsPVwiZGF0YS54XCIgLz5cbiAgPGJyIC8+XG4gIDxmLW1hdGg+ZGF0YS54ID0ge3sgZGF0YS54IH19PC9mLW1hdGg+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG5AaW1wb3J0IFwiaHR0cHM6Ly91bnBrZy5jb20vZmFjaHdlcmsvZGlzdC9mYWNod2Vyay5jc3NcIlxuPC9zdHlsZT4iLCJpbXBvcnQtbWFwLmpzb24iOiJ7XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJ2dWVcIjogXCJodHRwczovL3NmYy52dWVqcy5vcmcvdnVlLnJ1bnRpbWUuZXNtLWJyb3dzZXIuanNcIixcbiAgICBcImZhY2h3ZXJrXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vZmFjaHdlcmsvZGlzdC9mYWNod2Vyay5tanNcIlxuICB9XG59In0="
      >
        <IconVue />
        Fachwerk + Vue SFC
      </Button>
    </div>

    <p />

    <p class="w-full md:w-3/4 md:text-lg lg:text-xl">
      Alternatively, run the following in the command line
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
