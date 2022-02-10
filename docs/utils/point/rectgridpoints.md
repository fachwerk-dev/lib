# rectgridpoints

`rectgridpoints()` outputs an array of `Point`'s in 2D grid.

```ts
type Point = {
  x: number;
  y: number;
};

function rectgridpoints(count: number, step: number): Point[];
```

## Usage

```md
{{ rectgridpoints(5,30) }}
```

## Example

```md
<svg height="300">
  <circle
    v-for="point in rectgridpoints(10,30)"
    :cx="point.x"
    :cy="point.y"
    r="10"
    fill="lightblue"
  />
</svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-grid-pattern

https://visualia.github.io/visualia_original/#grids-and-patterns_pointgrid

https://visualia.github.io/visualia_original/#helper-functions_gridpoints

https://visualia.netlify.app/utils/rectgrid.html
