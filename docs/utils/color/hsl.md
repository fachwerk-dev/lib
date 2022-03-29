# hsl / hsla

`hsl()` function ouputs a CSS color string in [hsl() notation](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl()>).

```ts
function hsl(
  h: number = 0,
  s: number = 100,
  l: number = 50,
  a: number = 1
): string;
```

## Usage

Output a CSS color string with `h s l a` parameters:

```md
{{ hsl(10,20,30,0.1) }}
```

You can also set only the hue `h` parameter:

```md
{{ hsl(10) }}
```

> #### Not in a spec
>
> `hsl(hue)` is not part of the official CSS colors specification. It is a convenience feature by Fachwerk.

## Examples

### Hue

```md
Hover or tap over the colors to see how `h` value changes

<f-svg width="400" height="50">
  <rect
    v-for="h in range(0,360)"
    :x="h"
    y="0"
    width="1"
    height="50"
    :fill="hsl(h,100,50)"
    v-on:mouseover="f.h = h" 
  />
  <circle
    :cx="f.h"
    cy="25"
    r="10"
    :fill="hsl(f.h,100,50)"
    style="pointer-events: none"
    stroke="white"
    stroke-width="2"
  />
</f-svg>

{{ hsl(f.h,100,50) }}
```

### Saturation

```md
Hover or tap over the colors to see how `s` value changes

<f-svg width="400" height="50">
  <rect
    v-for="s in range(0,100)"
    :x="s"
    y="0"
    width="1"
    height="50"
    :fill="hsl(0,s,50)"
    v-on:mouseover="f.s = s"
  />
  <circle
    :cx="f.s"
    cy="25"
    r="10"
    :fill="hsl(0,f.s,50)"
    style="pointer-events: none"
    stroke="white"
    stroke-width="2"
  />
</f-svg>

{{ hsl(0,f.s,50) }}
```

### Lightness

```md
Hover or tap over the colors to see how `l` value changes

<f-svg width="400" height="50">
  <rect
    v-for="l in range(0,100)"
    :x="l"
    y="0"
    width="1"
    height="50"
    :fill="hsl(0,100,l)"
    v-on:mouseover="f.l = l"
  />
  <circle
    :cx="f.l"
    cy="25"
    r="10"
    :fill="hsl(0,100,f.l)"
    style="pointer-events: none"
    stroke="white"
    stroke-width="2"
  />
</f-svg>

{{ hsl(0,100,f.l) }}
```

### Alpha

```md
Hover or tap over the colors to see how `a` value changes

<f-svg width="400" height="50">
  <rect
    v-for="a in range(0,1,1/100)"
    :x="a * 100"
    y="0"
    width="1"
    height="50"
    :fill="hsl(0,100,50,a)"
    v-on:mouseover="f.a = a"
  />
   <circle
    :cx="f.a * 100"
    cy="25"
    r="10"
    :fill="hsl(0,100,50,f.a)"
    style="pointer-events: none"
    stroke="white"
    stroke-width="2"
  />
</f-svg>

{{ hsl(0,100,50,f.a) }}
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/hsl

https://visualia.github.io/visualia_original/#helper-functions_hsl

https://visualia.netlify.app/utils/colors.html#hsl

https://visualia.netlify.app/utils/colors.html#hsla

https://visualia.netlify.app/utils/colors.html#hue
