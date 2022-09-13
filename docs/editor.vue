<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useStorage } from "@vueuse/core";

import { utoa, atou } from "../src/app/functions/encoding";
import { compileMarkdown } from "../src/app/functions/markdown";

import Content from "../src/app/components/Content.vue";
import Compiler from "../src/app/components/Compiler.vue";
import Monaco from "../src/app/components/Monaco.vue";

const content = ref(atou(location.hash.slice(1)));
if (!content.value) {
  content.value = "<f-hello />";
}
watchEffect(() => {
  history.replaceState({}, "", "#" + utoa(content.value));
});

const onError = (e: any) => console.log(e);

const showPreview = useStorage("fachwerk_preview", false);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <Monaco class="h-screen" v-model="content" v-if="!showPreview" />
    <Content class="p-4 md:p-6">
      <Compiler :source="compileMarkdown(content)" @error="onError" />
    </Content>
  </div>
  <div
    class="fixed bottom-3 left-3 block rounded bg-gray-700 px-3 py-1 text-sm text-gray-200 md:hidden"
    @click="showPreview = !showPreview"
  >
    {{ showPreview ? "Code" : "Preview" }}
  </div>
</template>
