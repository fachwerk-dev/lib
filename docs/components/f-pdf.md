# f-pdf

`<f-pdf>` is an experimental component that renders geometric shapes into a PDF document. It also provides low-level access to PDF document, powered by [pdf-lib](https://pdf-lib.js.org/) library.

<!-- TODO access PDF with ref -->

```md
<f-pdf>
  <f-pdf-path
    :d="
      circlepoints(8,50,[200,200])
         .map(point => circlepath(50,point))
         .join('')
      "
  />
</f-pdf>
```
