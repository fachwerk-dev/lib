# circlepath

`circlepath()` is a function that outputs a circle as [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).

```ts
function circlepath(r: number, xOrPoint: number | Point, y?: number);
```

## Usage

Circle path with the radius of `50` and center in `0,0`:

```md
{{ circlepath(50) }}
```

Circle path with the radius of `50` and center in `150,150`:

```md
{{ circlepath(50,150,150) }}
```

Circle path with the radius of `50` and center in `150,150`, defined as a `Point`:

```md
{{ circlepath(50,{x: 150, y: 150}) }}
```

## Example

Let's draw a circle with a radius of `50`:

```md
<f-svg centered>
  <path
    :d="circlepath(50)"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>
```

Now let's combine the `circlepoints()` and `circlepath()` functions:

```md
<f-svg centered>
  <path
    :d="circlepoints(16,50).map(point => circlepath(50,point)).join(` `)"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>
```
