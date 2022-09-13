# translate

`translate()` returns a [SVG translate](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#translate) / [CSS translate](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate()>) transform function as a string.

```ts
function translate(x: number = 0, y: number = 0, unit?: "px" | "%"): string;
```

## Usage

```md
{{ translate(100,100) }}

{{ translate(100,100,'px') }}

{{ translate(100,100,'%') }}
```

## Examples

### SVG translate example

SVG transforms are unitless, so we can just pass numeric values to `translate()` function:

```md
<f-svg width="400" height="400" rectgrid>
  <rect
    :transform="translate(data.x,data.y)"
    width="100"
    height="100"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>

SVG x transform is {{ data.x }}
<f-slider v-model="data.x" max="400" step="100" />

SVG y transform is {{ data.y }}
<f-slider v-model="data.y" max="400" step="100" />
```

### CSS translate example

Note that for the CSS transform you will need to pass an unit to the `transform()` function, either `px` or `%`:

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
    :style="{transform: translate(data.x,data.y,'px')}"
  /> 
</div>

<br />

CSS x transform is {{ data.x }}
<f-slider v-model="data.x" max="400" step="100" />

CSS y transform is {{ data.y }}
<f-slider v-model="data.y" max="400" step="100" />
```

## Prior art

https://visualia.netlify.app/utils/transforms.html#translate
