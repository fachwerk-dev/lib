# rectpath

`rectpath()` is a function that outputs a rectangle as [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)

```ts
type Point = {
  x: number;
  y: number;
};

function rectpath(
  width: number,
  height: number,
  xOrPoint: Point | number,
  y?: number
);
```

It is implemented as a simple function that draws a closed <router-link to="/utils/path/polygonpath">polygonpath</router-link> along the the <router-link to="/utils/point/rectpoints">rectpoints</router-link>.

```ts
return polygonpath(rectpoints(width, height, xOrPoint, y), true);
```

## Usage

```md
{{ rectpath(50,50) }}
```

## Example

Drawing a simple rectangle:

```md
<svg>
  <path :d="rectpath(50,50,50,50)"
    stroke="lightblue"
    stroke-width="2"
    fill="none"
  />
</svg>
```
