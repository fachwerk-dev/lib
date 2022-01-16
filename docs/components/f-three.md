# f-three

`<f-three />` and it's children are experimental components that provide high-level declarative interface to Three.js while also provide a low level access to 3D engine for extra features and perfomance.

> The minimal number of 3D components and APIs Fachwerk provides is by design. If you need richer 3D environments with declarative APIs, go for [TroisJS](https://troisjs.github.io/) or [React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction).

Here is an example of setting up a scene and linking it up with Fachwerk's slider control:

```
<script setup>
  import { watch } from 'vue'
  import { BoxGeometry } from 'three'
  const mesh = $ref()
  const x = $ref(0)
  watch(() => x, () => {
    mesh.mesh.rotation.x = x / 180 * Math.PI
    mesh.update();
  })
</script>

<f-slider v-model="x" step="any" max="360" />

<f-three>
  <f-three-group ref="mesh">
  <f-three-mesh :geometry="new BoxGeometry(20, 20, 20)" />
  <f-three-path :path="circlepath(0,0,20)" />
  </f-three-group>
</f-three>
```

<script setup>
  import { watch } from 'vue'
  import { BoxGeometry } from 'three'
  const mesh = $ref()
  const x = $ref(0)
  watch(() => x, () => {
    mesh.mesh.rotation.x = x / 180 * Math.PI
    mesh.update();
  })
</script>

<f-slider v-model="x" step="any" max="360" />

<f-three>
  <f-three-group ref="mesh">
  <f-three-mesh :geometry="new BoxGeometry(20, 20, 20)" />
  <f-three-path :path="circlepath(0,0,20)" />
  </f-three-group>
</f-three>

Note that the Three.js scene only updates when `mesh.update()` is called to save the resources. If there is a need to update the scene on each frame (say, to use video textures), one can use a helper function [useRafFn](https://vueuse.org/core/useraffn/) (a requestAnimationFrame wrapper exposed as Vue composable).

```js
// In <script setup>
import { useRafFn as raf } from "@vueuse/core";
raf(() => mesh?.update());
```
