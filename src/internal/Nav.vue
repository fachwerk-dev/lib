<script setup lang="ts">
import { sidebar } from "../../docs/config";
</script>
<template>
  <nav class="leading-8 text-gray-600">
    <ul>
      <li v-for="link in sidebar" class="pb-2 last:pb-0">
        <router-link
          v-if="link.link && !link.children"
          :to="link.link"
          class="font-medium block hover:text-sky-600"
          active-class="text-sky-600 underline underline-offset-2"
        >
          {{ link.text }}
        </router-link>
        <div v-if="!link.link" class="font-medium">{{ link.text }}</div>
        <ul v-if="link.children" class="pl-4">
          <li v-for="child in link.children">
            <router-link
              :to="child.link"
              class="block hover:text-sky-600"
              active-class="text-sky-600 underline underline-offset-2"
            >
              {{ child.text }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
