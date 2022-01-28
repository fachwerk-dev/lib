<script setup lang="ts">
import IconMenu from "~icons/tabler/menu-2";
import { state } from "../internal/state";
</script>
<template>
  <header
    class="flex justify-between bg-sky-900 p-5 font-medium text-slate-200 hover:text-gray-100"
  >
    <ul class="flex gap-6">
      <li class="block md:hidden">
        <IconMenu
          @click="state.menuOpen = !state.menuOpen"
          class="cursor-pointer text-sky-200 hover:text-sky-300"
        />
      </li>
      <li>
        <router-link
          to="/"
          class="text-sky-200 hover:text-sky-300"
          active-class="text-sky-500"
        >
          Fachwerk
        </router-link>
      </li>
      <li>
        <router-link
          to="/get-started/vite"
          class="text-sky-200 hover:text-sky-300"
          active-class="text-sky-500"
          >Docs</router-link
        >
      </li>
      <li>
        <a
          href="https://editor.fachwerk.dev"
          target="_blank"
          class="text-sky-200 hover:text-sky-300"
        >
          Editor
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a
          href="https://github.com/fachwerk-dev/fachwerk"
          target="_blank"
          class="text-sky-200 hover:text-sky-300"
        >
          Github
        </a>
      </li>
    </ul>
  </header>
</template>
