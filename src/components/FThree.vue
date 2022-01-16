<script lang="ts" setup>
import {
  ref,
  onMounted,
  defineProps,
  onBeforeUpdate,
  provide,
  onUnmounted,
} from "vue";
import { Scene, PerspectiveCamera, WebGLRenderer, Group } from "three";
//import { SVGRenderer } from "three/examples/jsm/renderers/SVGRenderer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export type Context = {
  scene: Scene | Group;
  update: Function;
  transforms: string[];
};

const props = defineProps({ a: { type: Number, default: 1 } });

const el = ref(null);
const width = 100;
const height = 100;

const scene = new Scene();
const camera = new PerspectiveCamera(100, width / height, 0.1, 1000);
camera.position.z = width / 2.38;

//const renderer = new SVGRenderer();

const renderer = new WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.setPixelRatio(2);

renderer.setSize(width, height);

const update = () => {
  renderer.render(scene, camera);
};

//@ts-ignore
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", update);

onMounted(() => {
  //@ts-ignore
  el.value.append(renderer.domElement);
  update();
});

onUnmounted(() => {
  renderer.dispose();
});

onBeforeUpdate(() => {
  update();
});

const context: Context = {
  scene,
  update,
  transforms: [],
};
provide("context", context);
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>
