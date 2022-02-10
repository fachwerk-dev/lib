# f-slider

`<f-slider />` is a component that changes a numeric variable with a slider. It is a lightweight wrapper around `<input type="range" />` HTML element.

Here we assign slider value to a global variable `f.x`:

```md
<f-slider v-model="f.x" />

The value of `f.x` is {{ f.x }}
```

You can use that variable to control the SVG `<circle />` position on the page (or anything, really).

```md
<svg>
  <circle :cx="f.x" cy="50" r="10" fill="lightblue" />
</svg>
```

## Setting attributes

Since `<f-slider />` is a lightweight wrapper around `<input type="range" />` so all the [input element attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range), including `min`, `max` and `step`.

```md
<svg width="100" height="100">
  <circle :cx="f.x2" cy="50" r="10" fill="lightblue" />
</svg>

<f-slider v-model="f.x2" step="50" />

The value of x2 is {{ f.x2 }}
```

Note that `step` attribute can also be set to `step="any"` that makes slider to emit floating point value for those _smooooooth_ animations.

```md
<svg>
  <circle :cx="f.x3" cy="50" r="10" fill="lightblue" />
</svg>

<f-slider v-model="f.x3" step="any" />

The value of x3 is <br /> {{ f.x3 }}
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-slider

https://visualia.github.io/visualia_original/#live-variables_slider

https://visualia.netlify.app/components/v-slider.html
