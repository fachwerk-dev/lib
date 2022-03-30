# arcpath

Generates arc as a SVG path. Powered by [d3.arc()](https://github.com/d3/d3-shape#arcs).

```ts
arcpath(
  startAngle: number,
  endAngle: number,
  innerRadius: number,
  outerRadius?: number,
  cornerRadius?: number
): string
```

## Usage

```md
{{ arcpath(0, 180, 100) }}
```

## Example

Drawing a simple arc from `0` to `180` degrees with radius of `100`:

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

Drawing a more complex arc from `0` to `180` degrees, with inner radius of `100`, outer radius of `200` and border radius of `10`:

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
