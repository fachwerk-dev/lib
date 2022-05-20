<script setup lang="ts">
const { to = null, href = null } = defineProps(["to", "href"]);
const classes =
  "not-prose inline-flex gap-2 items-center rounded border-2 border-black px-5 py-3 text-center font-medium hover:bg-black/5 transition";
</script>

<script lang="ts">
export default {
  inheritAttris: false,
};
</script>
<template>
  <div class="not-prose">
    <router-link :class="classes" v-bind="$attrs" v-if="to" :to="to">
      <slot />
    </router-link>
    <a
      v-bind="$attrs"
      :class="classes"
      v-if="href"
      :href="href"
      target="_blank"
    >
      <slot />
    </a>
  </div>
</template>
