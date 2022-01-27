<script setup lang="ts">
import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  BufferGeometry,
  Material,
} from "three";
import { inject, watch } from "vue";
import type { Context } from "./FThree.vue";

const { scene, update } = inject("context") as Context;

type Props = {
  geometry?: BufferGeometry;
  material?: Material;
};

const {
  geometry = new BoxGeometry(10, 10, 10),
  material = new MeshBasicMaterial({ color: "skyblue" }),
} = defineProps<Props>();

const mesh = new Mesh(geometry, material);

watch(
  () => scene,
  () => {
    if (scene) {
      scene.add(mesh);
      update();
    }
  },
  { immediate: true }
);

defineExpose({ mesh, update });
</script>

<template />
