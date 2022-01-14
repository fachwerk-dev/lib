# f-math

f-math displays mathematical expressions.

## Usage

Here are some simple math expressions:

```md
<f-math>a = \frac{1}{10}</f-math>
```

Lets assign <f-math>a</f-math> to a global variable `v.a` and use `<f-slider />` to control it.

```md
<f-math>a = \frac{ {{ v.a }} }{10} = {{ v.a / 10 }}</f-math>

<f-slider v-model="v.a" />
```

## Syntax reference

Here are some references and examples how to express math in LaTeX / KaTeX format:

https://katex.org/docs/supported.html
https://en.wikibooks.org/wiki/LaTeX/Mathematics

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-math
https://fachwerk.github.io/fachwerk_original/#math
