# toPoint

Converts polar coordinates to Cartesian coordinates. Inspired by [circlepointt()](https://rdrr.io/cran/useful/man/circlepointt.html) function in R and Matlab.

```ts
type Point = [x: number, y: number];

function toPoint(angle: number, radius: number): Point;
```

## Usage

```md
{{ toPoint(90, 10) }}
```

## Example

```md
<f-svg width="400" height="400" centered rectgrid>
  <path :d="circlePath(100)" fill="none" stroke="lightgray" stroke-width="2" />
  <line
    :x1="toPoint(f.deg,100)[0]"
    y1="-200"
    :x2="toPoint(f.deg,100)[0]"
    y2="200"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
  <line
    x1="-200"
    :y1="toPoint(f.deg,100)[1]"
    x2="200"
    :y2="toPoint(f.deg,100)[1]"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
  <path
    :d="arcPath(0,f.deg,100)"
    fill="none"
    stroke="steelblue"
    stroke-width="2"
  />
</f-svg>

Degrees: {{ f.deg }}
Cartesian: {{ toPoint(f.deg,100) }}
Radius: 100

<f-slider v-model="f.deg" max="360" :value="180" />
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/polarx

https://designstem.github.io/fachwerk/docs/#/polarxy

https://designstem.github.io/fachwerk/docs/#/polarxy

https://visualia.github.io/visualia_original/#helper-functions_circlexy

https://visualia.netlify.app/utils/trig.html#polar
