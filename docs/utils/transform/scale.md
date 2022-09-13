# scale

`scale()` returns a [SVG scale](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#scale) / [CSS scale](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale()>) transform function as a string.

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

By default SVG scales the border size of the element along with the rest of the element. To to keep the original border width on scale, there is a CSS style [vector-effect: non-scaling-stroke](https://www.w3.org/TR/SVGTiny12/painting.html#NonScalingStroke) available.

```md
<f-svg width="400" height="400" padding="5" rectgrid>
  <rect
    :transform="scale(data.scale)"
    width="100"
    height="100"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
    :vector-effect="['','non-scaling-stroke'][data.nss]"
  />
</f-svg>

SVG scaling factor is {{ data.scale }}
<f-slider v-model="data.scale" max="4" step="any" :value="1" />

Non scaling stroke is {{ ['false','true'][data.nss] }}
<f-slider v-model="data.nss" max="1" />
```

### CSS scale example

In CSS, scale origin is at the centre of the object by default.

To scale from `0,0` coordinates, you will need to the following property to the element:

```
<div
  style="transform-origin: 0 0"
  ...
/>
```

Note that you can also set scale unit to `%`.

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
    "
    :style="{transform: scale(data.scale)}"
  /> 
</div>

<br />

CSS scaling factor is {{ data.scale }}
<f-slider v-model="data.scale" max="4" step="any" :value="1" />
```

## Prior art

https://visualia.netlify.app/utils/transforms.html#scale
