# circlepoints

`circlepoints()` is a function that outputs an array of `Point`'s on a circle.

```ts
type Point = [x: number, y: number];

function circlepoints(
  length: number,
  r: number,
  position: Point = [0, 0]
): Point[];
```

## Usage

```md
{{ circlepoints(16, 100) }}
```

## Examples

Drawing a `16` points on circle with radius of `100`, centered at `200,200`. Note we are unstructuring `point` into `[x,y]`:

```md
<f-svg width="400" height="400" padding="1" rectgrid>
  <circle
    v-for="[x,y] in circlepoints(16, 100, [200,200])"
    :cx="x"
    :cy="y"
    r="10"
    fill="lightblue"
  />
</f-svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-circle-pattern

https://designstem.github.io/fachwerk/docs/#/circlepoints

https://visualia.github.io/visualia_original/#helper-functions_circlepoints

https://visualia.netlify.app/utils/polargrid.html

```

```
