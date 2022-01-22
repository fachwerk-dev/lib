# polarpoints

`polarpoints()` is a function that outputs an array of `Point`s in a circle.

```ts
type Point = {
  x: number;
  y: number;
};

function polarpoints(count: number, r: number): Point[];
```

## Usage

```md
{{ polarpoints(4, 50) }}
```

## Example

```md
<svg>
  <circle
    v-for="point in polarpoints(8, 50)"
    :cx="point.x + 75"
    :cy="point.y + 75"
    r="10"
    fill="skyblue"
  />
</svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/polarpoints
