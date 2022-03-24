# polygonpath

`polygonpath()` is a function that outputs a [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) based on array of Points.

Optionally accepts `closed` parameter that auto-closes the path.

```ts
type Point = [x: number, y: number];

function polygonpath(points: Point[], closed: boolean = false): string;
```

## Usage

Open and closed paths:

```md
{{ polygonpath([[0,0],[100,100],[200,0],[300,100]]) }}

{{ polygonpath([[0,0],[100,100],[200,0],[300,100]], true) }}
```

## Example

```md
<svg>
  <path :d="polygonpath([[0,0],[100,100],[200,0],[300,100]])"
    stroke="lightblue"
    stroke-width="2"
    fill="none"
  />
</svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-polygon

https://visualia.netlify.app/utils/linepath.html
