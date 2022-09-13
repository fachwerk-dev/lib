# f-mouse

`f-mouse` is a component that wraps any content and returns mouse data relative to child component.

```md
<f-mouse v-model="data.mouse">
  <f-svg width="400" height="400">
    <rect width="400" height="400" fill="whitesmoke" />
    <circle
      :cx="data.mouse[0]"
      :cy="data.mouse[1]"
      :r="data.mouse.pressed ? 20 : 10"
      fill="none"
      stroke="lightblue"
      stroke-width="2"
    />
  </f-svg>
</f-mouse>

f.mouse is {{ data.mouse }}
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-mouse
