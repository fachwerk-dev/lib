# scale

`scale()` function returns a [SVG scale](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#scale) / [CSS scale](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale()>) function as a string.

```
function scale(scaleX: number = 1, scaleY?: number, unit?: "%"): string
```

## Usage

```md
{{ scale(2) }}

{{ scale(2, 1) }}

{{ scale(2, 1, '%') }}
```

## Examples

### SVG scale example

By default SVG scales the border size of the element along with the rest of the element. To to keep the original border width on scale, there is a [non-scaling-stroke](https://www.w3.org/TR/SVGTiny12/painting.html#NonScalingStroke) effect available.

Also note that we use `step="any"` on the `f-slider` component. It is one of possible values of `step` property of `<input type="range" />` tag.

```md
<f-svg width="250" height="250" padding="1">
  <path
    :d="rectgridpath(10,25)"
    fill="none"
    stroke="whitesmoke"
    stroke-width="2"
  />
  <rect
    :transform="scale(f.s)"
    width="50"
    height="50"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
    vector-effect="non-scaling-stroke"
  />
</f-svg>

`f.s` is `{{ f.s }}`
<f-slider v-model="f.s" max="4" step="any" :value="1" />
```

### CSS scale example

In CSS, scale origin is at the centre of the object by default.

Note that you can also set scale unit to `%`.

```md
<div
  style="
    width: 250px;
    height: 250px;
    border: 2px solid whitesmoke;
  "
>
  <div
    style="
      width: 50px;
      height: 50px;
      border: 2px solid lightblue;
    "
    :style="{transform: scale(f.s)}"
  /> 
</div>

<br />

`f.s` is `{{ f.s }}`
<f-slider v-model="f.s" max="4" step="any" :value="1" />
```

## Prior art

https://visualia.netlify.app/utils/transforms.html#scale
