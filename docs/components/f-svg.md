# f-svg

`<f-svg>` is a thin wrapper component around the `<svg>` element, providing quality-of-life enhancements: content padding, content centering, download capability and mobile support.

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

<f-slider v-model="f.padding" max="10" />

<f-svg :padding="f.padding" width="300" height="300">
  <circle
    v-for="p in rectgridpoints(11,30)"
    :cx="p.x"
    :cy="p.y"
    r="10"
    fill="lightblue"
  />
</f-svg>
```

### Centered

In many *circum*stances it is handy to set the SVG coordinate system to the center of the SVG, especially when working with radial symmetry.

While it is possible to group and transform all contents of SVG or alter `viewBox` attribute values, its easier to use `centered` prop on `<f-svg>`:

```md
<f-svg centered width="300" height="300">
  <circle
    v-for="p in circlepoints(16,100)"
    :cx="p.x"
    :cy="p.y"
    r="10"
    fill="lightblue"
    style="mix-blend-mode: multiply"
  />
</f-svg>
```

### Download

`<f-svg>` can react to the `downloadsvg` and `downloadpng` global events that allows downloading the contents of as SVG or PNG file.

As there might be many several `<f-svg>`s on a page, you need to identify the SVG with the `id` attribute and pass it to the emitted event. The `id` parameter is also the filename of the downloaded SVG file.

```md
<f-svg id="test" width="300" height="300"  centered>
   <circle
    v-for="p in circlepoints(8,50)"
    :cx="p.x"
    :cy="p.y"
    r="50"
    fill="lightblue"
    style="mix-blend-mode: multiply"
  />
</f-svg>

<button v-on:click="emit(`downloadsvg`,`test`)">Download test.svg</button>

<button v-on:click="emit(`downloadpng`,`test`)">Download test.png</button>
```

### Mobile support

When viewing the SVG on mobile devices, `<f-svg>` adjusts its contents to the page width.

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-scene

https://designstem.github.io/fachwerk/docs/#/f-artboard

https://visualia.github.io/visualia_original/#graphics_scene
