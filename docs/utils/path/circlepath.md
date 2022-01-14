# circlepath

A function that outputs a circle as [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths), based on `x`, `y` and `r` arguments.

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
  <circle cx="50" cy="75" r="25" />
  <path :d="circlepath(100,75,25)" fill="skyblue" />
</svg>
```
