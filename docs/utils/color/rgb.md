# rgb

`rgb()` function ouputs a CSS color string in [rgb() notation](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb()>).

```ts
function rgb(
  r: number = 0,
  g: number = 0,
  b: number = 0,
  a: number = 1
): string;
```

## Usage

Output a CSS color string with `r b g a` parameters:

```md
{{ rgb(0,100,200,1) }}
```

## Example

Let's draw a RGB color picker:

```md
<f-svg width="255" height="255" padding="10">
  <rect
    v-for="[r,g] in rectgridpoints(40,255/40)"
    :x="r"
    :y="g"
    :width="10"
    :height="10"
    :fill="rgb(r,g,0)"
  />
  <circle
    :cx="data.r"
    :cy="data.g"
    r="10"
    :fill="rgb(data.r,data.g,0)"
    stroke="white"
    stroke-width="2"
  />
</f-svg>

<f-svg width="255" height="50" padding="10">
  <rect
    v-for="b in seq(40,255/40)"
    :x="b"
    width="10"
    height="50"
    :fill="rgb(data.r,data.g,b)"
  />
  <circle
    :cx="data.b"
    cy="25"
    r="10"
    :fill="rgb(data.r,data.g,data.b)"
    stroke="white"
    stroke-width="2"
  />
</f-svg>

{{ rgb(data.r,data.g,data.b) }}
<f-slider v-model="data.r" max="255" />
<f-slider v-model="data.g" max="255" />
<f-slider v-model="data.b" max="255" />
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/rgb

https://visualia.github.io/visualia_original/#helper-functions_rgb

https://visualia.netlify.app/utils/colors.html#rgb

https://visualia.netlify.app/utils/colors.html#rgba
