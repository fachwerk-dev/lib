# Javascript module in HTML

The most bare-bones way to use Fachwerk is to import VueJS and Fachwerk into a single HTML file.

By using [ESM imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [import maps](https://github.com/WICG/import-maps) we can get the modular Javascript workflow in the browser without any tooling or build steps.

Fachwerk provides ESM-compatible CDN build in https://unpkg.com/fachwerk/dist/fachwerk.js (and also in https://esm.sh/fachwerk and https://cdn.skypack.dev/fachwerk).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/fachwerk/dist/style.css" rel="stylesheet" />
    <style>
      body {
        margin: 0;
        padding: 1em;
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script type="importmap">
      {
        "imports": {
          "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js",
          "fachwerk": "https://unpkg.com/fachwerk/dist/fachwerk.js",
          "marked": "https://unpkg.com/marked/lib/marked.esm.js"
        }
      }
    </script>
    <script type="module">
      import { createApp, ref } from "vue";
      import { Fachwerk } from "fachwerk";
      import { parse } from "marked";

      const App = {
        setup() {
          const x = ref(0);
          return { x };
        },
        template: parse(`
# Hello Fachwerk

## Local variable

<f-slider v-model="x" />

<f-math>x = {{ x }}</f-math>

## Global variable

<f-slider v-model="v.x" />

<f-math>x = {{ v.x }}</f-math>
        `),
      };

      const app = createApp(App);
      app.use(Fachwerk);
      app.mount("#app");
    </script>
  </body>
</html>
```
