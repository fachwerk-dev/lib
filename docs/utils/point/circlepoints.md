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
<svg>
  <circle
    v-for="[x,y] in circlepoints(8, 50, [75,75])"
    :cx="x"
    :cy="y"
    r="10"
    fill="lightblue"
  />
</svg>
```

Passing `point` to `translate()` function as a [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

```md
<svg>
  <circle
    v-for="point in circlepoints(8, 50, [75,75])"
    :transform="translate(...point)"
    r="10"
    fill="lightblue"
  />
</svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-circle-pattern

https://designstem.github.io/fachwerk/docs/#/circlepoints

https://visualia.github.io/visualia_original/#helper-functions_circlepoints

https://visualia.netlify.app/utils/polargrid.html

```

```
