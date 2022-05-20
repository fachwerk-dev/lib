# Javascript module in HTML

The most bare-bones way to use Fachwerk is to import VueJS and Fachwerk into a single HTML file.

By using [ESM imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [import maps](https://github.com/WICG/import-maps) we can get the modular Javascript workflow in the browser without any tooling or build steps.

Fachwerk provides ESM-compatible CDN build in https://unpkg.com/fachwerk/dist/fachwerk.js (and also in https://esm.sh/fachwerk)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://unpkg.com/fachwerk/dist/fachwerk.css"
      rel="stylesheet"
    />
    <style>
      body {
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
          "fachwerk": "https://unpkg.com/fachwerk/dist/fachwerk.mjs"
        }
      }
    </script>
    <script type="module">
      import { createApp, ref } from "vue";
      import { Fachwerk } from "fachwerk";

      const App = {
        template: `<f-hello />`,
      };

      const app = createApp(App);
      app.use(Fachwerk);
      app.mount("#app");
    </script>
  </body>
</html>
```
