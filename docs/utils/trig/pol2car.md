# pol2car

`pol2car()` function converts point in polar coordinates `angle, radius` into cartesian `x, y` coordinates.

Inspired by [pol2cart()](https://rdrr.io/cran/useful/man/pol2cart.html) function in R and Matlab.

```ts
function pol2car(angle: number, radius: number): [x: number, y: number];
```

## Usage

```md
{{ pol2car(0, 100) }}
```

## Example

```md
<f-svg width="400" height="400" centered rectgrid>
  <path :d="circlepath(100)" fill="none" stroke="lightgray" stroke-width="2" />
  <line
    :x1="pol2car(data.angle,100)[0]"
    y1="-200"
    :x2="pol2car(data.angle,100)[0]"
    y2="200"
    fill="none"
    stroke="lightgray"
    stroke-width="2"
  />
  <line
    x1="-200"
    :y1="pol2car(data.angle,100)[1]"
    x2="200"
    :y2="pol2car(data.angle,100)[1]"
    fill="none"
    stroke="lightgray"
    stroke-width="2"
  />
  <circle
    :cx="pol2car(data.angle,100)[0]"
    :cy="pol2car(data.angle,100)[1]"
    r="10"
    fill="lightblue"
  />
</f-svg>

<br />

angle: <f-slider v-model="data.angle" max="360" /> {{ data.angle }}
radius: 100
x: {{ pol2car(data.angle,100)[0] }}
y: {{ pol2car(data.angle,100)[1] }}
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/polarx

https://designstem.github.io/fachwerk/docs/#/polarxy

https://designstem.github.io/fachwerk/docs/#/polarxy

https://visualia.github.io/visualia_original/#helper-functions_circlexy

https://visualia.netlify.app/utils/trig.html#polar
