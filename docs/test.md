```vue
<script setup>
import { watch } from "vue";
import { BoxGeometry, MeshNormalMaterial } from "three";
import { deg2rad } from "fachwerk";

const mesh = $ref();
const y = $ref(0);
const geometry = new BoxGeometry(100, 100, 100);
const material = new MeshNormalMaterial();

watch(
  () => y,
  () => {
    mesh.mesh.rotation.y = deg2rad(y);
    //mesh.update();
  }
);

import { useRafFn as raf } from "@vueuse/core";
raf(() => mesh?.update());
</script>

<input type="range" v-model="y" step="any" max="360" />

<f-three>
  <f-three-mesh
    ref="mesh"
    :geometry="geometry"
    :material="material"
  />
</f-three>
```
