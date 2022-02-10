# rotate

`rotate()` function returns a [CSS rotate](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate()>) / [SVG rotate](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#rotate) function as a string.

```ts
function rotate(angle: number = 0, unit?: "deg" | "rad" | "turn"): string;
```

## Usage

```md
{{ rotate(10) }}

{{ rotate(10,'deg') }}

{{ rotate(10,'rad') }}

{{ rotate(10,'turn') }}
```

## Examples

### SVG rotate example

In SVG, rotation origin is at `0,0` coordinates by default.

To rotate around the centre of the object, you will need to add following properties to the element:

```
<rect
  transform-origin="center"
  style="transform-box: fill-box"
  ...
/>
```

```md
<f-svg width="250" height="250" padding="1">
  <path
    :d="rectgridpath(10,25)"
    fill="none"
    stroke="whitesmoke"
    stroke-width="2"
  />
  <rect
    :transform="rotate(f.a)"
    width="50"
    height="50"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>

`f.a` is `{{ f.a }}`
<f-slider v-model="f.a" max="360" />
```

### CSS transform example

In CSS, rotation origin is at the centre of the object by default.

To rotate around the `0,0` coordinates, you will need to the following property to the element:

```
<rect
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
      width: 60px;
      height: 60px;
      border: 2px solid lightblue;
      position: relative;
    "
    :style="{transform: rotate(f.a, 'deg')}"
  /> 
</div>

<br />

`f.r` is `{{ f.a }}`
<f-slider v-model="f.a" max="360" />
```

## Prior art

https://visualia.netlify.app/utils/transforms.html#rotate
