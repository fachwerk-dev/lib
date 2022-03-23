# rectgridpoints

`rectgridpoints()` outputs an array of `Point`'s in 2D grid.

```ts
type Point = {
  x: number;
  y: number;
};

function rectgridpoints(count: number, step: number): Point[];
```

```ts
type $Point = [x: number, y: number];

function $rectgridpoints(
  length: number,
  step: number,
  position: $Point = [0, 0]
): $Point[];
```

## Usage

```md
{{ rectgridpoints(2,10) }}

{{ $rectgridpoints(2,10) }}
```

## Example

Classic `rectgridpoints()` with `10 × 10` grid with step `20` and `10,10` offset from top left corner:

```md
<svg height="200">
  <circle
    v-for="point in rectgridpoints(10,20)"
    :cx="point.x + 10"
    :cy="point.y + 10"
    r="10"
    fill="lightblue"
  />
</svg>
```

Alternative `$rectgridpoints()`:

```md
<svg height="200">
  <circle
    v-for="[x,y] in $rectgridpoints(10,20,[10,10])"
    :cx="x"
    :cy="y"
    r="10"
    fill="lightblue"
  />
</svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-grid-pattern

https://visualia.github.io/visualia_original/#grids-and-patterns$Pointgrid

https://visualia.github.io/visualia_original/#helper-functions_gridpoints

https://visualia.netlify.app/utils/rectgrid.html
