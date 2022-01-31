# linepoints

`linepoints()` outputs an array of `Point`s along the line.

```ts
type Point = {
  x: number;
  y: number;
};

function linepoints(
  count: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): Point[];
```

## Usage

```md
{{ linepoints(4,0,0,100-1,100-1) }}
```

## Example

```md
<svg>
  <circle
    v-for="point in linepoints(4,0,0,100-1,100-1)"
    :cx="point.x"
    :cy="point.y"
    r="10"
    fill="lightblue"
  />
</svg>
```
