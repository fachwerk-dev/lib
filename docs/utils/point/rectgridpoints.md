# rectgridpoints

`rectgridpoints()` outputs an array of `Point`'s in 2D grid.

```ts
type Point = [x: number, y: number];

function rectgridpoints(
  length: number,
  step: number,
  position: Point = [0, 0]
): Point[];
```

## Usage

```md
{{ rectgridpoints(3,100,[100,100]) }}
```

## Example

Using `rectgridpoints()` with `3 × 3` grid with step `100` and `100,100` offset from top left corner:

```md
<f-svg width="400" height="400" rectgrid>
  <circle
    v-for="[x,y] in rectgridpoints(3,100,[100,100])"
    :cx="x"
    :cy="y"
    r="10"
    fill="lightblue"
  />
</f-svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-grid-pattern

https://visualia.github.io/visualia_original/#grids-and-patternsPointgrid

https://visualia.github.io/visualia_original/#helper-functions_gridpoints

https://visualia.netlify.app/utils/rectgrid.html
