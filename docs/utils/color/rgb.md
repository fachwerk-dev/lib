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

Let's draw a RGB colormap:

### Red

```md
<f-svg width="255" height="255">
  <rect
    v-for="[r,g] in rectgridpoints(25,10)"
    :x="r"
    :y="g"
    width="10"
    height="10"
    :fill="rgb(r,g,0)"
  />
  <rect
    :x="f.r"
    :y="f.g"
    width="10"
    height="10"
    fill="none"
    stroke="white"
    stroke-width="2"
    style="pointer-events: none"
  />
</f-svg>

<f-svg width="255" height="50">
  <rect
    v-for="b in seq(25,10)"
    :x="b"
    y="2"
    :width="10"
    :height="50 - 4"
    :fill="rgb(f.r,f.g,b)"
  />
 <rect
    :x="f.b"
    :width="10"
    height="50"
    fill="none"
    stroke="white"
    stroke-width="2"
    style="pointer-events: none"
  />
</f-svg>

{{ rgb(f.r,f.g,f.b) }}
<f-slider v-model="f.r" max="255" step="5" />
<f-slider v-model="f.g" max="255" step="5" />
<f-slider v-model="f.b" max="255" step="5" />
```
