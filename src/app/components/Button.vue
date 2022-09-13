<script lang="ts">
export default { inheritAttrs: false };
</script>
<script setup lang="ts">
const { to } = defineProps(["to"]);
</script>
<template>
  <div class="not-prose">
    <component
      :is="to ? 'router-link' : 'a'"
      :to="to"
      v-bind="$attrs"
      target="blank"
      class="inline-flex w-full items-center justify-center gap-2 rounded border-2 border-black bg-white px-5 py-3 text-center font-medium transition hover:bg-sky-50 md:flex md:w-max"
    >
      <slot />
    </component>
  </div>
</template>
