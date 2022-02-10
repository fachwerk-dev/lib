# arcpath

Generates arc as a SVG path. Powered by [d3.arc()](https://github.com/d3/d3-shape#arcs).

```ts
function arcpath(startAngle: number, endAngle: number, radius: number): string;
```

### Usage

```md
{{ arcpath(0, 270, 25, 50, 5) }}
```

### Example

```md
<f-svg centered>
  <path
    :d="arcpath(0, 270, 25, 50, 5)"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-arc

https://visualia.netlify.app/utils/arcpath.html
