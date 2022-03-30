# rectpath

`rectpath()` is a function that outputs a rectangle as [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)

```ts
type Point = [x: number, y: number];

function rectpath(width: number, height: number, position: Point = [0, 0]);
```

## Usage

```md
{{ rectpath(200,200,[100,100]) }}
```

## Example

Draw a path for `200 × 200` rectangle, with top-left corner at `100,100`:

```md
<f-svg width="400" height="400" rectgrid>
  <path :d="rectpath(200,200,[100,100])"
    stroke="lightblue"
    stroke-width="2"
    fill="none"
  />
</f-svg>
```
