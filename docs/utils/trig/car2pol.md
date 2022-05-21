# car2pol

`car2pol()` function converts point in cartesian coordinates `x, y` into polar coordinates `angle, radius`.

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
    :x1="data.x"
    y1="-200"
    :x2="data.x"
    y2="200"
    fill="none"
    stroke="lightgray"
    stroke-width="2"
  />
  <line
    x1="-200"
    :y1="data.y"
    x2="200"
    :y2="data.y"
    fill="none"
    stroke="lightgray"
    stroke-width="2"
  />
  <line
    :x2="data.x"
    :y2="data.y"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
  <circle
    :r="car2pol([data.x,data.y])[1]"
    fill="none"
    stroke="lightgray"
    stroke-width="2"
  />
  <circle
    :cx="data.x"
    :cy="data.y"
    r="10"
    fill="lightgray"
  />
</f-svg>

<br />

x <f-slider v-model="data.x" min="-100" max="100" /> {{ data.x }}
y <f-slider v-model="data.y" min="-100" max="100" :value="-100" /> {{ data.y }}

angle: {{ car2pol([data.x,data.y])[0] }}
radius: {{ car2pol([data.x,data.y])[1] }}
```

## Prior art

https://visualia.netlify.app/utils/trig.html#cartesian
