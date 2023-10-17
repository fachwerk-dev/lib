<script setup lang="ts">
import { state } from "../functions/state";
import IconGithub from "~icons/bx/bxl-github";
</script>
<template>
  <div class="overflow-auto bg-slate-900">
    <header
      class="mx-auto flex w-full max-w-7xl items-center justify-between py-5 px-4 font-medium text-slate-200 hover:text-gray-100 md:px-12"
    >
      <ul class="flex gap-4 md:gap-5">
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
          <router-link
            to="/editor"
            class="group flex items-center gap-1 text-slate-400 hover:text-slate-300"
          >
            Editor
          </router-link>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://github.com/fachwerk-dev/lib"
            target="_blank"
            class="text-slate-400 hover:text-slate-300"
          >
            <IconGithub />
          </a>
        </li>
      </ul>
    </header>
  </div>
</template>
