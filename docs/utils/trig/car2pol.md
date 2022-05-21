# car2pol

`car2pol()` function converts point in cartesian coordinates into polar coordinates.

Inspired by [cart2pol()](https://rdrr.io/github/jaredlander/useful/man/cart2pol.html) function in R and Matlab.

```ts
function car2pol(
  point: [x: number, y: number]
): [angle: number, radius: number];
```

## Usage

```md
{{ car2pol([0, -100]) }}
```

## Example

```md
<f-svg width="400" height="400" centered rectgrid>
  <line
    :x1="f.x"
    y1="-200"
    :x2="f.x"
    y2="200"
    fill="none"
    stroke="lightgray"
    stroke-width="2"
  />
  <line
    x1="-200"
    :y1="f.y"
    x2="200"
    :y2="f.y"
    fill="none"
    stroke="lightgray"
    stroke-width="2"
  />
  <line
    :x2="f.x"
    :y2="f.y"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
  <circle
    :r="car2pol([f.x,f.y])[1]"
    fill="none"
    stroke="lightgray"
    stroke-width="2"
  />
  <circle
    :cx="f.x"
    :cy="f.y"
    r="10"
    fill="lightgray"
  />
</f-svg>

Point: [{{ f.x }},{{ f.y }}]
Angle: {{ car2pol([f.x,f.y])[0] }}
Radius: {{ car2pol([f.x,f.y])[1] }}

<f-slider v-model="f.x" min="-100" max="100" />
<br />
<f-slider v-model="f.y" min="-100" max="100" :value="-100" />
```

## Prior art

https://visualia.netlify.app/utils/trig.html#cartesian
