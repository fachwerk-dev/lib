# circlepath

`circlepath()` is a function that outputs a circle as [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths), based on `x`, `y` and `r` arguments.

```ts
function circlepath(x: number, y: number, r: number): string;
```

## Usage

```md
{{ circlepath(50,50,25) }}
```

## Example

```md
<svg>
  <path
    :d="circlepath(150,75,50)"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</svg>
```
