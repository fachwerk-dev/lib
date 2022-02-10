# rectpoints

`rectpoints()` is a function that outputs an array of `Point`'s.

```ts
type Point = {
  x: number;
  y: number;
};

function rectpoints(
  width: number,
  height: number,
  xOrPoint: Point | number,
  y?: number
): Point[];
```

## Usage

```md
{{ rectpoints(50, 50)}}
```

## Example

```md
<svg>
  <circle
    v-for="point in rectpoints(50, 50, 50, 50)"
    :cx="point.x"
    :cy="point.y"
    r="10"
    fill="lightblue"
  />
</svg>
```
