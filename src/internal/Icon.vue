<script setup lang="ts">
import icons from "@iconify-json/tabler/icons.json";

type Props = {
  name: string;
};
const { name } = defineProps<Props>();

//@ts-ignore
const icon = icons.icons[name].body;
</script>

<template>
  <svg
    sstyle="
      display: inline-block;
      width: 24px;
      height: 24px;
      vertical-align: -webkit-baseline-middle;
    "
    class="text-lightgray-600 !inline-block h-5 align-[-webkit-baseline-middle]"
    viewBox="0 0 24 24"
    v-html="icon"
  />
</template>
