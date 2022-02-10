# rectpath

`rectpath()` is a function that outputs a rectangle as [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).

## Usage

```md
{{ rectpath(50,50) }}
```

## Example

Let's draw a simple rectangle:

```md
<svg>
  <path :d="rectpath(50,50,50,50)"
    stroke="lightblue"
    stroke-width="2"
    fill="none"
  />
</svg>
```

Combined with point-generating functions, we can make a simple coordinate grid:

```md
<svg width="300" height="300">
  <path :d="
    rectgridpoints(4,75)
      .map(point => rectpath(50,50,point))
      .join(' ')
    "
    stroke="lightblue"
    stroke-width="2"
    fill="none"
  />
</svg>
```
