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
{{ remap(50,0,100,200,400) }}
```

## Example

Here we map the input value `0 → 100` to output value `200 → 400`. Yes it can be also written <f-math>output = input \times 2 + 100</f-math> but `remap()` provides a easier way to do such conversions.

```md
<f-svg width="400" height="50" padding="10" linegrid>
  <circle :cx="f.value" cy="25" r="10" fill="lightblue" />
</f-svg>

Initial value:
{{ f.value }}

<f-svg width="400" height="50" padding="10" linegrid>
  <circle :cx="remap(f.value,0,100,200,400)" cy="25" r="10" fill="lightblue" />
</f-svg>

Remapped value:
{{ remap(f.value,0,200,0,400) }}

<f-slider v-model="f.value" max="100" />
```

Remapping can be done on anything numeric, here we are mapping the input `0 → 19` into HSL hue value ranging `0 → 360`

```md
<f-svg width="400" height="50" padding="10">
  <circle
    v-for="x in seq(20)"
    :fill="hsl(remap(x,0,19,0,360))"
    :cx="x * 20"
    cy="25"
    r="10"
  />
</f-svg>
```

## Prior art

https://visualia.github.io/visualia_original/#helper-functions_scale

https://designstem.github.io/fachwerk/docs/#/scale

https://visualia.netlify.app/utils/math.html#map
