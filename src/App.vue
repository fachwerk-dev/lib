<script setup lang="ts">
import { onErrorCaptured } from "vue";

onErrorCaptured(() => {
  return false;
});
</script>
<template>
  <RouterView />
</template>
