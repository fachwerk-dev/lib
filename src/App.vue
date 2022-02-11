<script setup lang="ts">
import { onErrorCaptured } from "vue";

onErrorCaptured((err) => {
  return false;
});
</script>
<template>
  <RouterView />
</template>
