# f-slider

`<f-slider />` is a component that changes a numeric variable with a slider. It is a lightweight wrapper around `<input type="range" />` HTML element.

```md
<f-slider v-model="v.x" />

The value of x is {{ v.x }}
```

Here we assign slider value to a global variable `v.x`.

You can use that variable to control the SVG `<circle />` position on the page (or anything, really).

```md
<svg>
  <circle :cx="v.x" cy="50" r="25" />
</svg>
```

## Setting attributes

Since `<f-slider />` is a lightweight wrapper around `<input type="range" />` so all the [input element attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range), including `min`, `max` and `step`.

```md
<svg width="100" height="100">
  <circle :cx="v.x2" cy="50" r="25" />
</svg>

<f-slider v-model="v.x2" step="50" />

The value of x2 is {{ v.x2 }}
```

Note that step attribute can also be set to `step="any"` that makes slider to emit floating point value for those _smooooooth_ animations.

```md
<svg width="400" height="100">
  <circle :cx="v.x3" cy="50" r="25" />
</svg>

<f-slider v-model="v.x3" max="400" step="any" />

The value of x3 is <br /> {{ v.x3 }}
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-slider
https://fachwerk.github.io/fachwerk_original/#live-variables_slider
