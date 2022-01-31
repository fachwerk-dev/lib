# linepoints

`linepoints()` outputs an array of `Point`'s along the line.

```ts
type Point = {
  x: number;
  y: number;
};

function linepoints(count: number, step: number): Point[];
```

## Usage

```md
{{ linepoints(10,30) }}
```

## Example

```md
<svg>
  <circle
    v-for="point in linepoints(10,30)"
    :cx="point.x"
    :cy="point.y"
    r="10"
    fill="lightblue"
  />
</svg>
```
