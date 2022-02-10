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
    transform-origin="center"
    style="transform-box: fill-box"
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

In CSS, rotation origin is at the centre of the object by default. Also, you will need to pass an unit to the `transform()` function, either `deg`, `rad` or `turn`.

```md
<div
  style="
    width: 300px;
    height: 300px;
    border: 2px solid whitesmoke;
    position: relative;
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
