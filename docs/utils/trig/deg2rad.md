# deg2rad

`deg2rad()` function converts degrees to radians.

```
function deg2rad(deg: number = 0): number
```

## Usage

```md
{{ deg2rad(180) }}
{{ PI }}
```

## Example

```md
<f-svg width="400" height="400" centered rectgrid>
  <path
    :d="circlepath(100)"
    fill="none"
    stroke="whitesmoke"
    stroke-width="2"
  />
  <path
    :d="arcpath(0,f.deg,100)"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
  />
</f-svg>

<f-slider v-model="f.deg" max="360" :value="180"/>

deg: {{ f.deg }} deg
rad: {{ deg2rad(f.deg) }}
rad / π: {{ deg2rad(f.deg) / PI }}
```

## See also

https://www.reddit.com/r/educationalgifs/comments/se37qy/simple_visual_explanation_of_radians

## Prior art

https://designstem.github.io/fachwerk/docs/#/deg2rad

https://visualia.github.io/visualia_original/#helper-functions_deg2rad

https://visualia.netlify.app/utils/trig.html#deg2rad
