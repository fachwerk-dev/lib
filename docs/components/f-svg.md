# f-svg

`<f-svg>` is a thin wrapper component around the `<svg>` element, providing quality-of-life enhancements: mobile support, content padding, content centering, and download capability.

#### Mobile support

When viewing the SVG on mobile devices `<f-svg>` adjusts its contents to the page width.

#### Padding

SVG default coordinate system starts at the top-left corner at the `0 0` position. While geometrically correct, it might lead to visual artifacts when SVG elements get close to the edge of the SVG elements: borders, grids, etc.

Note the uneven widths of rectangle borders and sizes of grid dots:

```md
<svg width="300" height="300">
  <circle v-for="p in rectgridpoints(10,10,30)" :cx="p.x" :cy="p.y" r="1" />
  <rect width="100" height="100" fill="none" stroke="black" />
</svg>
```

`<f-svg>` provides a `padding` attribute (also know as _bleed_ in the prepress community) to avoid visual artifacts near the edges.

Here is `<f-svg>` with `padding` of `10`:

```md
<f-svg width="300" height="300" padding="10">
  <circle v-for="p in rectgridpoints(10,10,30)" :cx="p.x" :cy="p.y" r="1" />
  <rect width="100" height="100" fill="none" stroke="black" />
</f-svg>
```

#### Centered

In many circumstances it is handy to set the SVG coordinate system to the center of the SVG, especially when working on radial symmetry. While it is possible to adjust `viewBox` attribute values manually, its easier to use `centered` attribute on `<f-svg>`:

```md
<f-svg centered width="300" height="300">
  <circle
    v-for="p in circlepoints(8,50)"
    :cx="p.x"
    :cy="p.y"
    r="50"
    fill="lightblue"
    style="mix-blend-mode: multiply"
  />
</f-svg>
```

#### Download

`<f-svg>` can react to the `"download"` global event that allows downloading the SVG contents as a file.

As there might be many SVGs on a page, you need to identify the SVG with the `id` attribute and pass it to the emitted event. The `id` parameter is also the filename of the downloaded SVG file.

#### Prior art

[Fachwerk f-scene](https://designstem.github.io/fachwerk/docs/#/f-scene)

[Fachwerk f-artboard](https://designstem.github.io/fachwerk/docs/#/f-artboard)

[Visualia v-scene](https://visualia.github.io/visualia_original/#graphics_scene)
