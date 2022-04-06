# f-three

`<f-three />` is an experimental component that provides high-level declarative interface to [Three.js](https://threejs.org/). There is also a way to directly access Three.js 3D objects to provide extra functionality and optimize performance.

> Fachwerk provides a very minimal set of Three.js components by design. If you need richer 3D environments with declarative APIs, go for [TroisJS](https://troisjs.github.io/), [React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) or [Svelte Cubed](https://svelte-cubed.vercel.app/).

## Examples

### Set up a ThreeJS scene and basic mesh

First, let's create a scene with `<f-three>` component. Then let's add `<f-three-mesh>` with `geometry` and `material` props.

> <Icon name="hand-finger" /> Use the mouse or pointer to adjust the rotation of the scene.

```md
<script setup>
import * as THREE from "three";

const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshBasicMaterial({ color: 'lightblue' });
</script>

<f-three>
  <f-three-mesh
    :geometry="geometry"
    :material="material"
  />
</f-three>
```

### Add user-controllable rotation

Now lets add a slider that controls a cube rotation. While at it, let's also change the material to [MeshNormalMaterial](https://threejs.org/docs/#api/en/materials/MeshNormalMaterial).

```md
<script setup>
import { watchEffect } from "vue";
import * as THREE from "three";
import { deg2rad } from "fachwerk";

const mesh = $ref();
const y = $ref(45);
const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshNormalMaterial();

watchEffect(() => {
  if (mesh) {
    mesh.mesh.rotation.y = deg2rad(y);
    mesh.update();
  }
});
</script>

<f-three>
  <f-three-mesh
    ref="mesh"
    :geometry="geometry"
    :material="material"
  />
</f-three>

Rotation: {{ y }}°

<input type="range" v-model="y" max="360" />
```

### Adding animation

Note that the ThreeJS scene only updates when `mesh.update()` is called. If there is a need to update the scene on each frame, one can use a helper function [useRafFn](https://vueuse.org/core/useraffn/) from [VueUse](https://vueuse.org).

And while at it let's go all in on [TorusGeometry](https://threejs.org/docs/#api/en/geometries/TorusGeometry).

```md
<script setup>
import { watchEffect } from "vue";
import * as THREE from "three";
import { deg2rad } from "fachwerk";
import { useRafFn } from "@vueuse/core";

const mesh = $ref();
const y = $ref(45);
const geometry = new THREE.TorusGeometry(50,50,64,64);
const material = new THREE.MeshNormalMaterial();

useRafFn(() => {
  if (mesh) {
    mesh.mesh.rotation.y += deg2rad(0.5);
    mesh.update();
  }
});
</script>

<f-three>
  <f-three-mesh
    ref="mesh"
    :geometry="geometry"
    :material="material"
  />
</f-three>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-scene3

https://designstem.github.io/fachwerk/docs/#/f-box3

https://designstem.github.io/fachwerk/docs/#/f-rotation3

https://visualia.github.io/visualia_original/#graphics_scene
