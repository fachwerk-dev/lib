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
<f-svg width="250" height="250">
  <path
    :d="rectgridpath(10,25)"
    fill="none"
    stroke="whitesmoke"
    stroke-width="2"
  />
  <rect
    :transform="rotate(f.angle)"
    width="50"
    height="50"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>

`f.angle` is `{{ f.angle }}`
<f-slider v-model="f.angle" max="360" />
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
    width: 250px;
    height: 250px;
    border-right: 2px solid whitesmoke;
    border-bottom: 2px solid whitesmoke;
    background-size: 25px 25px;
    background-image: linear-gradient(to right, whitesmoke 2px, transparent 2px), linear-gradient(to bottom, whitesmoke 2px, transparent 2px);
  "
>
  <div
    style="
      width: 50px;
      height: 50px;
      border: 2px solid lightblue;
      position: relative;
    "
    :style="{transform: rotate(f.angle, 'deg')}"
  /> 
</div>

<br />

`f.angle` is `{{ f.angle }}`
<f-slider v-model="f.angle" max="360" />
```

## Prior art

https://visualia.netlify.app/utils/transforms.html#rotate
