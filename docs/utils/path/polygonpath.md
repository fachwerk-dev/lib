# polygonpath

`polygonpath()` is a function that outputs a [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) based on array of Points.

Optionally accepts the `closed` parameter that auto-closes the path.

```ts
type Point = {
  x: number;
  y: number;
};

function polygonpath(points: Point[], closed: boolean = false): string;
```

## Usage

Open path:

```md
{{ polygonpath([{ x: 0, y: 0 }, { x: 100, y: 100 }, { x: 100, y: 100 }]) }}
```

Closed path:

```md
{{ polygonpath([{ x: 0, y: 0 }, { x: 100, y: 100 }, { x: 100, y: 100 }], closed = true) }}
```

## Example

```md
<svg>
  <path :d="polygonpath([
    { x: 0, y: 0 },
    { x: 100, y: 100 },
    { x: 200, y: 0 },
    { x: 300, y: 100 }
  ])"
  stroke="lightblue"
  stroke-width="2"
  fill="none"
/>
</svg>
```
