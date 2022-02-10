# skewX

`skewX()` returns a [SVG skewX](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#skewX) / [CSS skewX](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewX()>) / transform function as a string.

```
function skewX(angle: number = 0, unit?: "deg" | "rad" | "turn"): string
```

```md
{{ skewX(10) }}

{{ skewX(10, 'deg') }}
```

https://visualia.netlify.app/utils/transforms.html#skewx

<br />

# skewY

`skewY()` returns a [SVG skewY](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#skewY) / [CSS skewY](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewY()>) transform function as a string.

```
function skewY(angle: number = 0, unit?: "deg" | "rad" | "turn"): string
```

```md
{{ skewY(10) }}

{{ skewY(10, 'deg') }}
```

https://visualia.netlify.app/utils/transforms.html#skewy

<br />

# matrix

`skewY()` returns a [SVG matrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#matrix) / [CSS matrix](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix()>) transform function as a string.

<f-math>\begin{pmatrix} a & c & e \\\\ b & d & f \\\\ 0 & 0 & 1 \end{pmatrix}</f-math>

```
function matrix(
  a: number = 1, // scaleX
  b: number = 0, // skewY
  c: number = 0, // skewX
  d: number = 1, // scaleY
  e: number = 0, // translateX
  f: number = 0  // translateY
): string
```

```md
{{ matrix(1,0,0,1,0,0) }}
```

https://visualia.netlify.app/utils/matrix.html

https://visualia.netlify.app/utils/transforms.html#combining-transforms
