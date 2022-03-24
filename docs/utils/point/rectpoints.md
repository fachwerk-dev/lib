# rectpoints

`rectpoints()` is a function that outputs an array of `Point`'s.

```ts
type Point = [x: number, y: number];

function rectpoints(
  width: number,
  height: number,
  position: Point = [0, 0]
): Point[];
```

## Usage

```md
{{ rectpoints(50, 50)}}
```

## Example

Get points for `50 × 50` rectangle, with `25,25` top-left corner:

```md
<svg height="100">
  <circle
    v-for="[x,y] in rectpoints(50, 50, [25,25])"
    :cx="x"
    :cy="y"
    r="10"
    fill="lightblue"
  />
</svg>
```
