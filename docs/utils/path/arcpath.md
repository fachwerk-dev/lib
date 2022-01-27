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
<svg>
 <g transform="translate(150,75)">
    <path
      :d="arcpath(0, 270, 25, 50, 5)"
      fill="none"
      stroke="skyblue"
      stroke-width="2"
    />
  </g>
</svg>
```
