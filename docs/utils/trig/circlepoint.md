# circlepoint

Converts polar coordinates to `Point` in cartesian coordinates. Inspired by [pol2cart()](https://rdrr.io/cran/useful/man/pol2cart.html) function in R and Matlab.

```ts
type Point = [x: number, y: number];

function circlepoint(angle: number, radius: number): Point;
```

## Usage

```md
{{ circlepoint(0, 100) }}
```

## Example

```md
<f-svg width="400" height="400" centered rectgrid>
  <path :d="circlepath(100)" fill="none" stroke="lightgray" stroke-width="2" />
  <line
    :x1="circlepoint(f.deg,100)[0]"
    y1="-200"
    :x2="circlepoint(f.deg,100)[0]"
    y2="200"
    fill="none"
    stroke="lightgray"
    stroke-width="2"
  />
  <line
    x1="-200"
    :y1="circlepoint(f.deg,100)[1]"
    x2="200"
    :y2="circlepoint(f.deg,100)[1]"
    fill="none"
    stroke="lightgray"
    stroke-width="2"
  />
  <circle
    :cx="circlepoint(f.deg,100)[0]"
    :cy="circlepoint(f.deg,100)[1]"
    r="10"
    fill="lightblue"
  />
</f-svg>

Degrees: {{ f.deg }}
Radius: 100
Point: {{ circlepoint(f.deg,100) }}

<f-slider v-model="f.deg" max="360" />
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/polarx

https://designstem.github.io/fachwerk/docs/#/polarxy

https://designstem.github.io/fachwerk/docs/#/polarxy

https://visualia.github.io/visualia_original/#helper-functions_circlexy

https://visualia.netlify.app/utils/trig.html#polar
