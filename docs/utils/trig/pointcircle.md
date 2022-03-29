# pointcircle

Converts `Point` in cartesian coordinates into polar coordinates. Inspired by [cart2pol()](https://rdrr.io/github/jaredlander/useful/man/cart2pol.html) function in R and Matlab.

```ts
type Point = [x: number, y: number];

function pointcircle(point: Point): [angle: number, radius: number];
```

## Usage

```md
{{ pointcircle([0, -100]) }}
```

## Prior art

https://visualia.netlify.app/utils/trig.html#cartesian
