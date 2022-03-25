# f-canvas

`<f-canvas />` is an experimental component that provides a declarative interface to [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

```md
<f-canvas>
  <f-canvas-path
    :path="circlepath(100,[200,200])"
  />
  <f-canvas-path
    :rotate="f.r"
    :path="polygonpath(rectpoints(100, 100, [150, 150]), true)"
  />
</f-canvas>

Rotation: {{ f.r }}
<f-slider v-model="f.r" max="360" step="any" />
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-canvas

https://designstem.github.io/fachwerk/docs/#/f-pixel

https://designstem.github.io/fachwerk/docs/#/f-pixels

https://visualia.github.io/visualia_original/#graphics_scene
