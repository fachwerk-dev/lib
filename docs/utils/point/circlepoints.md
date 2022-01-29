# circlepoints

`circlepoints()` is a function that outputs an array of `Point`s in a circle.

```ts
type Point = {
  x: number;
  y: number;
};

function circlepoints(count: number, r: number): Point[];
```

## Usage

```md
{{ circlepoints(4, 50) }}
```

## Example

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

## Prior art

https://designstem.github.io/fachwerk/docs/#/circlepoints

https://visualia.github.io/visualia_original/#helper-functions_circlepoints
