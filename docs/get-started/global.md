# Global Javascript in HTML

For "classic" Javascript usage Fachwerk also provides a globally loadable UMD package https://unpkg.com/fachwerk/dist/fachwerk.umd.js

This allows simply to open the local HTML file in the browser and start exploring Fachwerk.

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
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
    <script src="https://unpkg.com/fachwerk/dist/fachwerk.umd.js"></script>
    <script>
      const { createApp, ref } = Vue;
      const { Fachwerk } = fachwerk;

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
