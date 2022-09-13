## seq

`seq()` function generates array of `count` of numbers, incrementing by `step` (1 by default), starting from `start` (0 by default).

In math it is called [fixed-length arithmethic sequence of numbers](https://mathigon.org/course/sequences/arithmetic-geometric).

```ts
function seq(
  count: number,
  step: number | ((current: number) => number) = 1,
  start: number = 0
);
```

### Usage

To create a simplest sequence just use `seq(count)`:

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

<mark>Experimental</mark>You can also define third `start` parameter when you want a sequence to start with something else than `0`:

```md
{{ seq(4, 2, 10) }}
```

### Example

```md
<f-svg width="400" height="50" padding="1" linegrid>
  <rect
    v-for="x in seq(data.count,data.step,data.start)"
    :x="x"
    width="1"
    height="100"
    fill="lightblue"
  />
</f-svg>

<f-slider v-model="data.count" :value="20" min="1" /> Count: {{ data.count }}

<f-slider v-model="data.step" :value="10" min="1" /> Step: {{ data.step }}

<f-slider v-model="data.start" :value="0" /> Start: {{ data.start }}
```

### Prior art

https://designstem.github.io/fachwerk/docs/#/f-array

https://visualia.github.io/visualia_original/#helper-functions_array
