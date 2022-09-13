<script setup lang="ts">
import { computed } from "vue";
import { twMerge } from "tailwind-merge";

type Props = {
  class?: string;
};
const { class: customClass = "" } = defineProps<Props>();
const defaultClass = `
  prose-headings:text-slate-800
  prose-h3:!text-xl
  prose-h4:!text-xl
  prose-h4:!font-medium
  prose-lead:w-[64ch]
  prose-p:mt-0
  prose-p:w-auto
  prose-p:before:content-none
  prose-p:after:content-none
  first:prose-p:mt-0
  only-of-type:prose-p:my-0
  prose-a:font-normal
  prose-a:break-words
  prose-a:text-lightblue-700
  prose-a:underline
  prose-a:underline-offset-2
  prose-blockquote:border-l-4
  prose-blockquote:border-yellow-400
  prose-blockquote:pl-6
  prose-blockquote:font-normal
  prose-blockquote:not-italic
  prose-strong:font-medium
  prose-code:text-sm
  prose-code:bg-lightblue-50
  prose-code:py-px
  prose-code:font-normal
  prose-code:text-lightblue-700
  prose-code:before:content-none
  prose-code:after:content-none
  prose-pre:-mx-4
  prose-pre:rounded-none
  prose-pre:bg-lightblue-50
  prose-pre:p-4
  prose-pre:md:-mx-0
  prose-pre:xl:rounded
  prose
`;
const mergedClass = computed(() => twMerge(`${defaultClass} ${customClass}`));
</script>

<template>
  <!--prettier-ignore-->
  <article
    :class="mergedClass">
    <slot/>
  </article>
</template>

<style>
p > svg {
  @apply mb-4 block;
}
.prose canvas {
  @apply mb-4;
}
.prose mark {
  @apply mr-1 rounded-sm bg-yellow-300 px-1;
}
.prose button {
  @apply text-lightblue-800 inline-block rounded border-2 border-sky-800 px-3 py-1 text-center font-medium hover:bg-black/5;
}
</style>
