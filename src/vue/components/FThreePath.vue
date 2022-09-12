<script setup lang="ts">
import { inject, watch } from "vue";
import {
  MeshBasicMaterial,
  Mesh,
  Group,
  DoubleSide,
  ShapeGeometry,
  Material,
} from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { Context } from "./FThree.vue";

const { scene, update } = inject("context") as Context;

type Props = {
  path: string;
  material?: Material;
};

const {
  path,
  material = new MeshBasicMaterial({ color: "black", side: DoubleSide }),
} = defineProps<Props>();

function createPathGroup(path: string): Group {
  const svg = `<path d="${path}"></path>`;

  const loader = new SVGLoader();
  const svgData = loader.parse(svg);
  const paths = svgData.paths;

  const group = new Group();

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];

    const shapes = SVGLoader.createShapes(path);

    for (let j = 0; j < shapes.length; j++) {
      const shape = shapes[j];
      const geometry = new ShapeGeometry(shape);
      const mesh = new Mesh(geometry, material);
      group.add(mesh);
    }
  }
  return group;
}

const mesh = createPathGroup(path);

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
