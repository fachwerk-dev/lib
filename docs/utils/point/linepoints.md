# linepoints

`linepoints()` outputs an array of `Point`'s along the line.

```ts
type Point = {
  x: number;
  y: number;
};

function linepoints(count: number, step: number): Point[];
```

## Usage

```md
{{ linepoints(10,30) }}

{{ seq(10,30) }}
```

## Example

Classic `linepoints()`:

```md
<svg height="100">
  <circle
    v-for="point in linepoints(10,30)"
    :cx="point.x"
    cy="50"
    r="10"
    fill="lightblue"
  />
</svg>
```

There is not much point nor flexibility for `linepoints()`. Better to use `seq()` directly:

```md
<svg height="100">
  <circle
    v-for="x in seq(10,30)"
    :cx="x"
    cy="50"
    r="10"
    fill="lightblue"
  />
</svg>
```

```md
{{ f.s = seq(10) }}

<svg height="100">
<circle
    v-for="x in f.s"
    :cx="x"
    cy="50"
    r="10"
    fill="lightblue"
  />
</svg>
```
