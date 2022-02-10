# remap

Remaps the number from one linear range to another. Inspired by Processing / p5 [map()](https://p5js.org/reference/#/p5/map) and D3 [scaleLinear()](https://github.com/d3/d3-scale#scaleLinear) functions.

```
function remap(
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
): number
```

## Usage

```md
{{ remap(0.5, 0, 1, 0, 360) }}
```

## Prior art

https://visualia.github.io/visualia_original/#helper-functions_scale

https://designstem.github.io/fachwerk/docs/#/scale

https://visualia.netlify.app/utils/math.html#map
