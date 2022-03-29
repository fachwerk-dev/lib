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

Let's draw a set of RGB combinations:

### Red

```md
<f-svg width="255" height="255">
  <rect
    v-for="[x,y] in rectgridpoints(25,10)"
    :x="x"
    :y="y"
    width="10"
    height="10"
    :fill="rgb(f.r,x,y)"
    v-on:mouseover="f.x = x; f.y = y"
  />
  <rect
    :x="f.x"
    :y="f.y"
    width="10"
    height="10"
    fill="none"
    stroke="white"
    stroke-width="2"
    style="pointer-events: none"
  />
</f-svg>

{{ rgb(f.x, f.y, f.r) }}
<f-slider v-model="f.r" max="255" step="10" />
```

### Green

```md
<f-svg width="255" height="255">
  <rect
    v-for="[x,y] in rectgridpoints(25,10)"
    :x="x"
    :y="y"
    width="10"
    height="10"
    :fill="rgb(x,f.g,y)"
    v-on:mouseover="f.x = x; f.y = y"
  />
  <rect
    :x="f.x"
    :y="f.y"
    width="10"
    height="10"
    fill="none"
    stroke="white"
    stroke-width="2"
    style="pointer-events: none"
  />
</f-svg>

{{ rgb(x,f.g,y) }}
<f-slider v-model="f.g" max="255" />
```

### Blue

```md
<f-svg width="255" height="255">
  <rect
    v-for="[x,y] in rectgridpoints(25,10)"
    :x="x"
    :y="y"
    width="10"
    height="10"
    :fill="rgb(x,y,f.b)"
  />
</f-svg>

{{ f.b }}
<f-slider v-model="f.b" max="255" />
```
