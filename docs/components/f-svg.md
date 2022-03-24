# f-svg

`<f-svg>` is a thin wrapper component around the `<svg>` element, providing several quality-of-life enhancements when working with SVG: content padding, content centering, downloading, and mobile support.

## Props

```ts
defineProps<{
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  centered?: boolean;
  id?: string;
}>();
```

## Features

### Padding

SVG default coordinate system starts at the top-left corner at the `0 0` position. This might lead to visual artifacts when elements get close to the edge of the SVG document.

`<f-svg>` provides a `padding` prop to avoid visual artifacts near the edges:

```md
Padding: {{ f.padding }}

<f-slider v-model="f.padding" max="5" />

<f-svg :padding="f.padding" width="400" height="400" rectgrid>
  <circle
    v-for="[x,y] in circlepoints(8,100,[200,200])"
    :cx="x"
    :cy="y"
    r="100"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>
```

### Centered

In many *circum*stances, it is handy to set the SVG coordinate system to the center of the SVG, especially when working with radial symmetry.

While it is possible to group and transform all contents of SVG or alter `viewBox` attribute values, its easier to use `centered` prop on `<f-svg>`:

```md
Centered: {{ ['false','true'][f.centered] }}

<f-slider v-model="f.centered" max="1" />

<f-svg :centered="f.centered" width="400" height="400" padding="1" rectgrid>
  <circle
    v-for="[x,y] in circlepoints(8,100)"
    :cx="x"
    :cy="y"
    r="100"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>
```

### Linegrid

TODO

### Rectgrid

TODO

### Download

`<f-svg>` listens to the `downloadsvg` and `downloadpng` global events that allow downloading the contents of as SVG or PNG file.

As there might be many several `<f-svg>`s on a page, you need to identify the SVG with the `id` attribute and pass it to the emitted event. The `id` parameter is also the filename of the downloaded SVG file.

```md
<f-svg id="test" width="400" height="400" centered padding="1" rectgrid>
   <circle
    v-for="[x,y] in circlepoints(8,100)"
    :cx="x"
    :cy="y"
    r="100"
    fill="lightblue"
    style="mix-blend-mode: multiply"
  />
</f-svg>

<button v-on:click="emit(`downloadsvg`,`test`)">Download test.svg</button>
```

### Mobile support

When viewing the SVG on mobile devices, `<f-svg>` adjusts its contents to the page width.

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-scene

https://designstem.github.io/fachwerk/docs/#/f-artboard

https://visualia.github.io/visualia_original/#graphics_scene

https://visualia.netlify.app/components/v-svg.html
