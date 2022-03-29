# PI and TAU

## PI

Returns <f-math>\pi</f-math> value, same as `Math.PI`.

```ts
const PI: number;
```

#### Usage

```md
{{ PI }}
```

#### Example

```md
<f-svg width="400" height="400" centered rectgrid>
  <circle
    v-for="x in range(-PI,PI,0.01)"
    :cx="remap(x,-PI,PI,-200,200)"
    :cy="remap(Math.cos(x),-1,1,-50,50)"
    r="1"
    fill="lightblue"
  />
</f-svg>
```

## TAU

Returns <f-math>\tau = 2 \times \pi</f-math> value. Inspired by the [Tau Manifesto](https://tauday.com/tau-manifesto).

```ts
const TAU: number;
```

#### Usage

```md
{{ TAU }}
```

#### Example

```md
<f-svg width="400" height="400" centered rectgrid>
  <circle
    v-for="x in range(-TAU,TAU,0.01)"
    :cx="remap(x,-TAU,TAU,-200,200)"
    :cy="remap(Math.cos(x),-1,1,-50,50)"
    r="1"
    fill="lightblue"
  />
</f-svg>
```

## Prior art

https://visualia.netlify.app/utils/trig.html#pi

https://visualia.netlify.app/utils/trig.html#tau
