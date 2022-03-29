# car2pol

Converts Cartesian coordinates to polar coordinates. Inspired by [cart2pol()](https://rdrr.io/github/jaredlander/useful/man/cart2pol.html) function in R and Matlab.

```ts
type Point = [x: number, y: number];

function car2pol(point: Point): [angle: number, radius: number];
```

## Usage

```md
{{ car2pol([0, 10]) }}
```

## Prior art

https://visualia.netlify.app/utils/trig.html#cartesian
