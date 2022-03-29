# rectgridpath

`rectgridpath()` outputs a rectangular grid as SVG path.

```
function rectgridpath(
  count: number,
  step: number,
  position: Point = [0, 0]
): string
```

## Usage

```md
{{ rectgridpath(4,100) }}
```

## Example

```md
<f-svg width="400" height="400">
  <path
    :d="rectgridpath(4,100)"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-grid

https://designstem.github.io/fachwerk/docs/#/f-axis
