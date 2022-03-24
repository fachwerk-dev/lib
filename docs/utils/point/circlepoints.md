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
{{ circlepoints(4, 50) }}
```

## Examples

Drawing a `8` points on circle with radius of `50`, centered at `75,75`. Note we are unstructuring `point` into `[x,y]`:

```md
<f-svg width="400" height="400" padding="1">
  <circle
    v-for="[x,y] in circlepoints(8, 100, [200,200])"
    :cx="x"
    :cy="y"
    r="10"
    fill="lightblue"
  />
  <path
    :d="rectgridpath(4,100)"
    fill="none"
    stroke="black"
    stroke-width="2"
    opacity="0.1"
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
