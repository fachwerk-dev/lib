# rectpoints

`rectpoints()` is a function that outputs an array of `Point`s, based on `x y width height` arguments.

```ts
type Point = {
  x: number;
  y: number;
};

function rectpoints(
  x: number,
  y: number,
  width: number,
  height: number
): Point[];
```

## Usage

```md
{{ rectpoints(50, 50, 50, 50)}}
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
