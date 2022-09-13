# rotate

`rotate()` returns a [SVG rotate](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#rotate) / [CSS rotate](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate()>) / transform function as a string.

```ts
function rotate(angle: number = 0, unit?: "deg" | "rad" | "turn"): string;
```

## Usage

```md
{{ rotate(10) }}

{{ rotate(10,'deg') }}
```

## Examples

### SVG rotate example

In SVG, rotation origin is at `0,0` coordinates by default.

To rotate around the center of the object, add the following properties to the element:

```
<rect
  transform-origin="center"
  style="transform-box: fill-box"
  ...
/>
```

```md
<f-svg width="400" height="400" rectgrid>
  <rect
    :transform="rotate(data.angle)"
    width="100"
    height="100"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>

SVG rotation angle is `{{ data.angle }}`
<f-slider v-model="data.angle" max="360" />
```

### CSS transform example

In CSS, rotation origin is at the object's center by default.

To rotate around the `0,0` coordinates, add the following property to the element:

```
<div
  style="transform-origin: 0 0"
  ...
/>
```

Note that CSS `transform()` function requires an unit, either `deg`, `rad` or `turn`.

```md
<div
   style="
    width: 400px;
    height: 400px;
    border-right: 2px solid whitesmoke;
    border-bottom: 2px solid whitesmoke;
    background-size: 100px 100px;
    background-image: linear-gradient(to right, whitesmoke 2px, transparent 2px), linear-gradient(to bottom, whitesmoke 2px, transparent 2px);
  "
>
  <div
    style="
      width: 100px;
      height: 100px;
      border: 2px solid lightblue;
      position: relative;
    "
    :style="{transform: rotate(data.angle, 'deg')}"
  /> 
</div>

<br />

CSS rotation angle is {{ data.angle }}
<f-slider v-model="data.angle" max="360" />
```

## Prior art

https://visualia.netlify.app/utils/transforms.html#rotate
