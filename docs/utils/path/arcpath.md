# arcpath

Generates arc as a SVG path. Powered by [d3.arc()](https://github.com/d3/d3-shape#arcs).

```ts
function arcpath(startAngle: number, endAngle: number, radius: number): string;
```

### Usage

```md
{{ arcpath(0, 180, 100) }}
```

### Example

```md
<f-svg width="400" height="400" centered rectgrid>
  <path
    :d="arcpath(0, 180, 100)"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>
```

```md
<f-svg width="400" height="400" centered rectgrid>
  <path
    :d="arcpath(0, 180, 100, 200, 10)"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-arc

https://visualia.netlify.app/utils/arcpath.html
