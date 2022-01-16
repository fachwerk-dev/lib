# f-pdf

`<f-pdf>` is an experimental component that renders geometric shapes into a PDF document. It also provides low-level access to PDF document, powered by [pdf-lib](https://pdf-lib.js.org/) library.

<!-- TODO access PDF with ref -->

```md
<f-pdf>
  <f-pdf-path
    :path="linepath(rectpoints(0, 0, 100, 100), true)" transform="translate(10,10)"
  />
   <f-pdf-path
    :path="circlepath(0,0,50)"
  />
</f-pdf>
```
