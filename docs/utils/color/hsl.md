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
<f-svg width="360" height="50" padding="10">
  <rect
    v-for="h in seq(100,360/100)"
    :x="h"
    :width="360/100"
    height="50"
    :fill="hsl(h,100,50)"
  />
 <circle
    :cx="f.h"
    cy="25"
    r="10"
    :fill="hsl(f.h,100,50)"
    stroke="white"
    stroke-width="2"
  />
</f-svg>

<f-svg width="200" height="200" padding="10">
  <rect
    v-for="[s,l] in rectgridpoints(40,5)"
    :x="s"
    :y="l"
    width="10"
    height="10"
    :fill="hsl(f.h,s / 2,l / 2)"
    v-on:click="f.s = s; f.l = l"
  />
  <circle
    :cx="f.s * 2"
    :cy="f.l * 2"
    r="10"
    :fill="hsl(f.h,f.s,f.l)"
    stroke="white"
    stroke-width="2"
  />
</f-svg>

{{ hsl(f.h,f.s,f.l) }}
<f-slider v-model="f.h" max="360" step="10" />
<f-slider v-model="f.s" max="100" step="5" :value="100" />
<f-slider v-model="f.l" max="100" step="5" :value="50" />
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/hsl

https://visualia.github.io/visualia_original/#helper-functions_hsl

https://visualia.netlify.app/utils/colors.html#hsl

https://visualia.netlify.app/utils/colors.html#hsla

https://visualia.netlify.app/utils/colors.html#hue
