# Fachwerk and Vanilla JS

Fachwerk provides a globally loadable UMD package https://unpkg.com/fachwerk/dist/fachwerk.js that allows to use Fachwerk functiobs without any Javascript framework or tooling.

### Use Stackblitz

<Button href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vanilla?file=index.html&title=Fachwerk+and+Vanilla+JS"><IconStackblitz />Fachwerk + Vanilla JS in Stackblitz</Button>

### Create a file

Create a local `index.html` file and open it in the browser:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    <svg width="500" height="500">
      <path id="path" fill="none" stroke="lightblue" stroke-width="2" />
    </svg>
  </body>

  <script src="https://unpkg.com/fachwerk/dist/fachwerk.js"></script>
  <script>
    const path = document.getElementById("path");
    const r = 100;

    // f is globally available object that contains
    // all Fachwerk functions

    const d = f.circlepoints(32, r).map((point) => f.circlepath(r, point));
    path.setAttribute("d", d);
    path.setAttribute("transform", f.translate(250, 250));
  </script>
</html>
```
