# circlepoints

`circlepoints()` is a function that outputs an array of `Point`'s in a circle.

```ts
type Point = {
  x: number;
  y: number;
};

function circlepoints(count: number, r: number): Point[];
```

```ts
type $Point = [x: number, y: number];

function $circlepoints(
  length: number,
  r: number,
  position: $Point = [0, 0]
): $Point[];
```

## Usage

```md
{{ circlepoints(4, 50) }}

{{ $circlepoints(4, 50) }}
```

## Examples

Classic `circlepoints()` returning array of objects:

```md
<svg>
  <circle
    v-for="point in circlepoints(8, 50)"
    :cx="point.x + 75"
    :cy="point.y + 75"
    r="10"
    fill="lightblue"
  />
</svg>
```

Using `$circlepoints()` with array of coordinate pair arrays. Note we are unstructuring `point` into `[x,y]`:

```md
<svg>
  <circle
    v-for="[x,y] in $circlepoints(8, 50, [75,75])"
    :cx="x"
    :cy="y"
    r="10"
    fill="lightblue"
  />
</svg>
```

Keeping the `point` and passing it to `translate()` function as a [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

```md
<svg>
  <circle
    v-for="point in $circlepoints(8, 50, [75,75])"
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
