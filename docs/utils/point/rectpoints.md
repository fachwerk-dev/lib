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

```md
<f-svg width="400" height="400" padding="1" rectgrid>
  <circle
    v-for="[x,y] in rectpoints(200, 200, [100,100])"
    :cx="x"
    :cy="y"
    r="10"
    fill="lightblue"
  />
</f-svg>
```
