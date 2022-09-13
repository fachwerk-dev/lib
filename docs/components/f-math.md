# f-math

f-math displays mathematical expressions using LaTeX / KaTeX syntax.

## Usage

Here are some simple math expressions:

```md
<f-math>a = \frac{1}{10}</f-math>
```

Lets assign to a global variable `data.a` and use `<f-slider />` to control it.

```md
<f-math>a = \frac{ {{ data.a }} }{10} = 10</f-math>

<f-slider v-model="data.a" />
```

## Syntax reference

Here are some references and examples of how to express math in LaTeX / KaTeX format:

https://katex.org/docs/supported.html

https://en.wikibooks.org/wiki/LaTeX/Mathematics

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-math

https://visualia.github.io/visualia_original/#math
