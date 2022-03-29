# hsl

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

## Example

```md
<f-svg width="360" height="50">
  <rect
    v-for="h in seq(36,10)"
    :x="h"
    y="2"
    :width="12"
    :height="50 - 4"
    :fill="hsl(h,100,50)"
    v-on:click="f.h = h"
  />
 <rect
    :x="remap(f.h,0,36 * 10,0,400)"
    :width="10"
    height="50"
    fill="none"
    stroke="white"
    stroke-width="2"
    style="pointer-events: none"
  />
</f-svg>

<f-svg width="400" height="400">
  <rect
    v-for="[s,l] in rectgridpoints(10,10)"
    :x="s * 4"
    :y="l * 4"
    width="40"
    height="40"
    :fill="hsl(f.h,s,l)"
    v-on:click="f.s = s; f.l = l"
  />
  <rect
    :x="f.s * 4"
    :y="f.l * 4"
    width="40"
    height="40"
    fill="none"
    stroke="white"
    stroke-width="2"
  />
</f-svg>

{{ hsl(f.h,f.s,f.l) }}
<f-slider v-model="f.h" max="360" step="10" />
<f-slider v-model="f.s" max="100" step="10" />
<f-slider v-model="f.l" max="100" step="10" />
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/hsl

https://visualia.github.io/visualia_original/#helper-functions_hsl

https://visualia.netlify.app/utils/colors.html#hsl

https://visualia.netlify.app/utils/colors.html#hsla

https://visualia.netlify.app/utils/colors.html#hue
