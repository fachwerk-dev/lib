<script setup lang="ts">
import IconMenu from "~icons/tabler/menu-2";
import { state } from "../internal/state";
import IconOpen from "~icons/tabler/layers-subtract";
import IconGithub from "~icons/tabler/brand-github";
</script>
<template>
  <header
    class="flex items-center justify-between bg-slate-900 p-5 font-medium text-slate-200 hover:text-gray-100"
  >
    <ul class="flex gap-3 md:gap-4">
      <li class="block md:hidden">
        <div
          @click="state.menuOpen = !state.menuOpen"
          class="cursor-pointer text-slate-400 hover:text-slate-300"
        >
          ▦
        </div>
      </li>
      <li>
        <router-link
          to="/"
          class="text-slate-400 hover:text-slate-300"
          active-class="text-slate-100"
        >
          Fachwerk
        </router-link>
      </li>
      <li>
        <router-link
          to="/get-started/vite"
          class="text-slate-400 hover:text-slate-300"
          active-class="text-slate-100"
        >
          Docs
        </router-link>
      </li>
      <li>
        <a
          href="https://editor.fachwerk.dev"
          target="_blank"
          class="group flex items-center gap-1 text-slate-400 hover:text-slate-300"
        >
          Editor
          <IconOpen class="text-slate-600 group-hover:text-slate-500" />
        </a>
      </li>
      <li>
        <a
          href="https://slides.fachwerk.dev"
          target="_blank"
          class="group flex items-center gap-1 text-slate-400 hover:text-slate-300"
        >
          Slides
          <IconOpen class="text-slate-600 group-hover:text-slate-500" />
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a
          href="https://github.com/fachwerk-dev/fachwerk"
          target="_blank"
          class="text-slate-400 hover:text-slate-300"
        >
          <IconGithub />
        </a>
      </li>
    </ul>
  </header>
</template>
