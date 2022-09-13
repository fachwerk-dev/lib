<script lang="ts">
export default { inheritAttrs: false };
</script>
<template>
  <div class="not-prose">
    <a
      v-bind="$attrs"
      target="blank"
      class="decoration-none inline-flex w-full items-center justify-center gap-2 rounded border-2 border-black px-3 py-1 text-center font-medium transition hover:bg-black/5 md:flex md:w-max"
    >
      <slot />
    </a>
  </div>
</template>
