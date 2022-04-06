<script setup lang="ts">
import tabler from "@iconify-json/tabler/icons.json";
const icons = { tabler };

type Props = {
  id: string;
};
const { id } = defineProps<Props>();
const [collection, name] = id.split(":");
//@ts-ignore
const icon = icons[collection]?.icons[name]?.body;
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
