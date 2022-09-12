<script setup lang="ts">
import { sidebar } from "../../docs/config";
import { state } from "./state";
const onClick = () => {
  window.scrollTo({
    top: 0,
  });
  state.menuOpen = !state.menuOpen;
};
</script>
<template>
  <nav
    :class="{ block: state.menuOpen, hidden: !state.menuOpen }"
    class="md:block"
  >
    <ul class="leading-8 text-gray-600">
      <li v-for="link in sidebar" class="pb-6 last:pb-0">
        <router-link
          @click="onClick"
          v-if="link.link && !link.children"
          :to="link.link"
          class="block font-medium hover:text-sky-600"
          active-class="text-sky-600 underline underline-offset-2 xl:text-lg"
        >
          {{ link.text }}
        </router-link>
        <div v-if="!link.link" class="font-medium">{{ link.text }}</div>
        <ul v-if="link.children">
          <li v-for="child in link.children">
            <router-link
              @click="onClick"
              :to="child.link"
              class="block hover:text-sky-700"
              active-class="text-sky-700 underline underline-offset-2"
            >
              {{ child.text }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
