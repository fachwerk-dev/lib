<script setup>
  import { watch } from 'vue'
  import { BoxGeometry } from 'three'

  const mesh = $ref()
  const x = $ref(0)
  const geometry = new BoxGeometry(50, 50, 50)

  watch(() => x, () => {
    mesh.mesh.rotation.x = x / 180 * Math.PI
    mesh.update();
  })
</script>

# f-three

`<f-three />` is an experimental component that provides high-level declarative interface to [Three.js](https://threejs.org/). There is also a way to directly access Three.js 3D objects to provide extra functionality and optimize performance.

> Fachwerk provides a very minimal set of Three.js components by design. If you need richer 3D environments with declarative APIs, go for [TroisJS](https://troisjs.github.io/), [React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) or [Svelte Cubed](https://svelte-cubed.vercel.app/).

Here is an example of setting up a scene and linking it up with Fachwerk's slider control:

<Grid>

```
<script setup>
  import { watch } from 'vue'
  import { BoxGeometry } from 'three'

  const mesh = $ref()
  const x = $ref(0)
  const geometry = new BoxGeometry(20, 20, 20)

  watch(() => x, () => {
    mesh.mesh.rotation.x = x / 180 * Math.PI
    mesh.update();
  })
</script>

<f-slider v-model="x" step="any" max="360" />

<f-three>
  <f-three-group ref="mesh">
    <f-three-mesh :geometry="geometry" />
    <f-three-path :path="circlepath(0,0,20)" />
  </f-three-group>
</f-three>
```

<div style="padding: 1.5em">

<f-three>
  <f-three-group ref="mesh">
    <f-three-mesh :geometry="geometry" />
    <f-three-path :path="circlepath(0,0,50)" />
  </f-three-group>
</f-three>

<f-slider v-model="x" step="any" max="360" />
   
Rotation: {{ x }}

 </div>
</Grid>

Note that the Three.js scene only updates when `mesh.update()` is called to save the resources. If there is a need to update the scene on each frame (say, to use video textures), one can use a helper function [useRafFn](https://vueuse.org/core/useraffn/) (a requestAnimationFrame wrapper exposed as Vue composable).

```js
// In <script setup>
import { useRafFn as raf } from "@vueuse/core";
raf(() => mesh?.update());
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-scene3

https://visualia.github.io/visualia_original/#graphics_scene
