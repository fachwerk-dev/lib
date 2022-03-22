## seq

`seq()` function generates array of `count` of numbers, incrementing by `step` (1 by default), starting from `start` (0 by default).

In [math definitions](https://mathigon.org/course/sequences/arithmetic-geometric) it generates a _fixed-length arithmethic or geometric sequence of numbers_.

### Signature

```ts
function seq(
  count: number,
  step: number | ((current: number, index?: number) => number) = 1,
  start: number = 0
);
```

### Usage

```md
{{ seq(4) }}
```

To specify how numbers in the sequence are defined you can pass a number as a second parameter `step`:

```md
{{ seq(4, 2) }}
{{ seq(4, -2) }}
```

Alternatively, you can define `step` parameter as a function that allows to create more complex sequences.

```md
{{ seq(4, n => n * n) }}
```

Finally, you can define a `start` parameter when you want a sequence to start with something else than `0`:

```md
{{ seq(4, 2, 10) }}
```

### Example

```md
<f-svg width="400" height="100">
  <rect
    v-for="x in seq(4,100)"
    :x="x"
    width="2"
    height="100"
    fill="lightblue"
  />
</f-svg>
```

```md
<f-svg width="400" height="400" centered>
  <path
    v-for="a in seq(4,360/4)"
    :d="arcpath(a,a + 360/4,100,50)"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>
```

#### More info
