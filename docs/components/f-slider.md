# f-slider

`<f-slider />` is a component that changes a numeric variable with a slider. It is a lightweight wrapper around `<input type="range" />` HTML element.

You can use that variable to control the SVG `<circle />` position on the page (or anything, really).

Here we assign slider value to a global variable `f.x`:

```md
<f-svg width="400" height="50" padding="10" linegrid>
  <circle :cx="f.x" cy="25" r="10" fill="lightblue" />
</f-svg>

The value of f.x is {{ f.x }}

<f-slider v-model="f.x" />
```

## Setting attributes

Since `<f-slider />` is a lightweight wrapper around `<input type="range" />` so all the [input element attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range), including `min`, `max` and `step`.

```md
<f-svg width="400" height="50" padding="10" linegrid>
  <circle :cx="f.x2" cy="25" r="10" fill="lightblue" />
</f-svg>

The value of x2 is {{ f.x2 }}

<f-slider v-model="f.x2" max="400" step="100" />
```

Note that `step` attribute can also be set to `step="any"` that makes slider to [emit floating point values](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step).

This is expecially useful for sliders emitting values between `0` and `1`:

```md
The value of x3 is
{{ f.x3 }}

<f-slider v-model="f.x3" max="1" step="any" />
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-slider

https://visualia.github.io/visualia_original/#live-variables_slider

https://visualia.netlify.app/components/v-slider.html
