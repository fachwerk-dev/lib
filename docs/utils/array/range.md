# range

`range()` function generates an array of numbers between `from` and `to` with an optional `step` parameter.

Inspired by Python's [range()](https://docs.python.org/3/library/stdtypes.html#range) function.

```ts
export function range(from: number, to: number, step: number = 1): number[];
```

## Usage

Generate array of numbers from `1` to `3`:

```md
{{ range(1,3) }}
```

Generate array of numbers from `1` to `3` with step of `0.5`:

```md
{{ range(1,3,0.5) }}
```

Generate an array of numbers from `3` to `1`, in ascending order:

```md
{{ range(3,1) }}
```

### Example

```md
<f-svg width="400" height="50" padding="1" linegrid>
  <rect
    v-for="x in range(data.start,data.end,data.step)"
    :x="x"
    width="1"
    height="100"
    fill="lightblue"
  />
</f-svg>

<f-slider v-model="data.start" :value="0" /> Start: {{ data.start }}

<f-slider v-model="data.end" :value="100" max="400" /> End: {{ data.end }}

<f-slider v-model="data.step" :value="1" max="100" /> Step: {{ data.step }}

Length: {{ range(data.start,data.end,data.step).length }}
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/range

https://visualia.github.io/visualia_original/#helper-functions_range

https://visualia.netlify.app/utils/arrays.html#range
