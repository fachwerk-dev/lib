# translate

`translate()` returns a [SVG translate](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#translate) / [CSS translate](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate()>) transform function as a string.

```ts
function translate(x: number = 0, y: number = 0, unit?: "px" | "%"): string;
```

## Usage

```md
{{ translate(10,10) }}

{{ translate(10,10,'px') }}

{{ translate(10,10,'%') }}
```

## Examples

### SVG translate example

SVG transforms are unitless, so we can just pass numeric values to `translate()` function:

```md
<f-svg width="250" height="250" padding="1">
  <path
    :d="rectgridpath(10,25)"
    fill="none"
    stroke="whitesmoke"
    stroke-width="2"
  />
  <rect
    :transform="translate(f.x,f.y)"
    width="50"
    height="50"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>

`f.x` is `{{ f.x }}`
<f-slider v-model="f.x" max="250" step="25" />

`f.y` is `{{ f.y }}`
<f-slider v-model="f.y" max="250" step="25" />
```

### CSS translate example

Note that for the CSS transform you will need to pass an unit to the `transform()` function, either `px` or `%`:

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
    "
    :style="{transform: translate(f.x,f.y,'px')}"
  /> 
</div>

<br />

`f.x` is `{{ f.x }}`
<f-slider v-model="f.x" max="250" step="25" />

`f.y` is `{{ f.y }}`
<f-slider v-model="f.y" max="250" step="25" />
```

## Prior art

https://visualia.netlify.app/utils/transforms.html#translate
