# linepath()

A function that outputs a [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) based on array of Points.

Optionally accepts the `closed` parameter that auto-closes the path.

```ts
type Point = {
  x: number;
  y: number;
};

function linepath(points: Point[], closed: boolean = false): string;
```

## Usage

```md
{{ linepath([{ x: 0, y: 0 }, { x: 100, y: 100 }]) }}
```

```md
{{ linepath([{ x: 0, y: 0 }, { x: 100, y: 100 }], closed = true) }}
```

## Example

```md
<svg>
  <path :d="linepath([{ x: 0, y: 0 }, { x: 100, y: 100 }])" stroke="skyblue" stroke-width="2" />
</svg>
```
