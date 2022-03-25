# f-mouse

`f-mouse` is a component that wraps any content and returns mouse data relative to child component.

```md
<f-mouse v-model="f.mouse">
  <f-svg width="400" height="400">
    <rect width="400" height="400" fill="whitesmoke" />
    <circle
      :cx="f.mouse.x"
      :cy="f.mouse.y"
      :r="f.mouse.pressed ? 20 : 10"
      fill="none"
      stroke="lightblue"
      stroke-width="2"
    />
  </f-svg>
</f-mouse>

f.mouse is {{ f.mouse }}
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-mouse
