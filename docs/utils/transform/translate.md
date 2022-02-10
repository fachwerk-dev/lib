# translate

`translate()` function returns a [CSS translate](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate()>) / [SVG translate](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#translate) function as a string allowing passing dynamic parameters to a transform.

## Usage

```md
{{ translate(10,10) }}

{{ translate(10,10,'px') }}

{{ translate(10,10,'%') }}
```

## Examples

### SVG transform example

```md
<f-svg width="300" height="300" padding="1">
  <path
    :d="rectgridpath(10,30)"
    fill="none"
    stroke="whitesmoke"
    stroke-width="2"
  />
  <rect
    :transform="[translate(f.x,f.y),rotate(f.a)].join(' ')"
    width="30"
    height="30"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>

`f.x` is `{{ f.x }}`
<f-slider v-model="f.x" max="300" step="30" />

`f.y` is `{{ f.y }}`
<f-slider v-model="f.y" max="300" step="30" />

`f.r` is `{{ f.a }}`
<f-slider v-model="f.a" max="360" />
```

### CSS transform example

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
      width: 30px;
      height: 30px;
      border: 2px solid lightblue;
      position: relative;
    "
    :style="{transform: [translate(f.x,f.y,'px'), rotate(f.a, 'deg')].join(' ')}"
  /> 
</div>

<br />

`f.x` is `{{ f.x }}`
<f-slider v-model="f.x" max="300" step="30" />

`f.y` is `{{ f.y }}`
<f-slider v-model="f.y" max="300" step="30" />

`f.r` is `{{ f.a }}`
<f-slider v-model="f.a" max="360" />
```

## Prior art

https://visualia.netlify.app/utils/transforms.html#translate
