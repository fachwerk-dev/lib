<script setup lang="ts">
import IconMenu from "~icons/tabler/menu-2";
import { state } from "../internal/state";
</script>
<template>
  <header
    class="bg-slate-800 text-slate-200 hover:text-gray-100 p-5 font-medium flex justify-between"
  >
    <ul class="flex gap-6">
      <li class="md:hidden block">
        <IconMenu
          @click="state.menuOpen = !state.menuOpen"
          class="text-gray-200 hover:text-gray-200 cursor-pointer"
        />
      </li>
      <li><router-link to="/">Fachwerk</router-link></li>
      <li><router-link to="/get-started/vite">Docs</router-link></li>
      <li>
        <a href="https://editor.fachwerk.dev" target="_blank"> Editor </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="https://github.com/fachwerk-dev/fachwerk" target="_blank">
          Github
        </a>
      </li>
    </ul>
  </header>
</template>
