# circlegridpoints

`circlegridpoints()` outputs an array of `Point`'s in 2D circular (polar) grid.

```ts
type Point = {
  x: number;
  y: number;
};

function circlegridpoints(count: number, step: number): Point[];
```

## Usage

```md
{{ circlegridpoints(3,30) }}
```

## Example

```md
<svg height="300">
  <circle
    v-for="point in circlegridpoints(30,30)"
    :cx="point.x + 150"
    :cy="point.y + 150 "
    r="10"
    fill="lightblue"
  />
</svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-polargrid
