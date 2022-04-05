```md
# Hello

<f-slider v-model="f.a" />

{{ f.a }}
```

```md
# Hello

<script setup>
import { watchEffect } from "vue";
import { BoxGeometry, MeshNormalMaterial } from "three";
import { deg2rad } from "fachwerk";
import { useRafFn } from "@vueuse/core";

const mesh = $ref();
const y = $ref(0);
const geometry = new BoxGeometry(100, 100, 100);
const material = new MeshNormalMaterial();

watchEffect(() => {
  if (mesh) {
    mesh.mesh.rotation.y = deg2rad(y);
    mesh.update();
  }
});

useRafFn(() => {
  if (mesh) {
    mesh.mesh.rotation.y += deg2rad(0.5);
    mesh.update();
  }
});
</script>

<input type="range" v-model="y" step="0.5" max="360" />

<f-three>
  <f-three-mesh ref="mesh" :geometry="geometry" :material="material" />
</f-three>
```

<script setup>
import { watchEffect } from "vue";
import { BoxGeometry, MeshNormalMaterial } from "three";
import { useRafFn } from "@vueuse/core";
import { deg2rad } from '../src/lib.esm'

const mesh = $ref();
const y = $ref(0);
const geometry = new BoxGeometry(100, 100, 100);
const material = new MeshNormalMaterial();

watchEffect(() => {
  if (mesh) {
    mesh.mesh.rotation.y = deg2rad(y);
    mesh.update();
  }
});

useRafFn(() => {
  if (mesh) {
    mesh.mesh.rotation.y += deg2rad(1);
    mesh.update();
  }
});
</script>

<input type="range" v-model="y" step="0.5" max="360" />

<f-three>
  <f-three-mesh ref="mesh" :geometry="geometry" :material="material" />
</f-three>
