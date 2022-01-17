<script setup>
import { watch } from 'vue'
import { range } from '../../src/lib.esm'
import { whenever } from '@vueuse/core'

const context = $ref(null);

whenever(() => context, () => {
  context.ctx.fillStyle = 'black';
  range(0,10000).forEach(i => context.ctx.fillRect(Math.random() * 300,Math.random() * 300,1,1));
})
</script>

# f-canvas

`<f-canvas />` is an experimental component that provides a declarative interface to [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

```md
<f-canvas>
  <f-canvas-path
    :path="circlepath(150,150,50)"
    :opacity="0.25"
  />
  <f-canvas-path
    :rotate="f.r"
    :path="linepath(rectpoints(50, 50, 100, 100), true)"
    :opacity="0.5"
  />
</f-canvas>

<f-slider v-model="f.r" max="360" step="any" />

rotation: {{ f.r }}
```

`<f-canvas>` also allows low-level access to underlying Canvas context for extra functionality and performance:

<Grid>

```
<script setup>
import { watch } from 'vue'
import { range } from '../../src/lib.esm'
import { whenever } from '@vueuse/core'

const context = $ref(null);

whenever(() => context, () => {
  context.ctx.fillStyle = 'black';
  range(0,10000).forEach(i => context.ctx.fillRect(Math.random() * 300,Math.random() * 300,1,1));
})
</script>

<f-canvas ref="context"></f-canvas>
```

<f-canvas ref="context" style="padding: 1.5rem"></f-canvas>

</Grid>

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-canvas

https://visualia.github.io/visualia_original/#graphics_scene
