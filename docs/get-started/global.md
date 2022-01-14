# Global Javascript in HTML

For "classic" Javascript usage Fachwerk also provides a globally loadable UMD package https://unpkg.com/fachwerk/dist/fachwerk.umd.js

This allows simply to open the local HTML file in the browser and start exploring Fachwerk.

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
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
    <script src="https://unpkg.com/fachwerk/dist/fachwerk.umd.js"></script>
    <script src="https://unpkg.com/marked/lib/marked.umd.js"></script>
    <script>
      const { createApp, ref } = Vue;
      const { Fachwerk } = fachwerk;
      const { parse } = marked;

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
