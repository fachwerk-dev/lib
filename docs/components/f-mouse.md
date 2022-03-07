# f-mouse

`f-mouse` is a component that wraps any content and returns mouse data relative to child component.

```md
<f-mouse v-model="f.mouse">
  <svg width="250" height="250">
    <rect width="250" height="250" fill="whitesmoke" />
    <circle
      :cx="f.mouse.x"
      :cy="f.mouse.y"
      :r="f.mouse.pressed ? 20 : 10"
      fill="none"
      stroke="lightblue"
      stroke-width="2"
    />
  </svg>
</f-mouse>

`f.mouse.x` is `{{ f.mouse?.x }}`

`f.mouse.y` is `{{ f.mouse?.y }}`

`f.mouse.pressed` is `{{ f.mouse?.pressed }}`
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-mouse
