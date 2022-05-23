# Node

Fachwerk utility functions are also available in NodeJS, both ESM and CommonJS packages.

### Installation

```bash
npm install fachwerk
```

### Usage with ESM

Edit the `index.mjs` as follows:

```js
// index.mjs

import { circlepoints } from "fachwerk";
console.log(circlepoints(24, 50));
```

Then run:

```bash
node index.mjs
```

### Usage with CommonJS

Edit the `index.cjs` as follows:

```js
// index.cjs

const { circlepoints } = require("fachwerk");
console.log(circlepoints(24, 50));
```

Then run:

```bash
node index.cjs
```

### Generating SVG with Node

Here is an example how to use Fachwerk functions to generate SVG and convert it to PNG using [resvg-js](https://github.com/yisibl/resvg-js) package.

```js
import { writeFile } from "fs/promises";
import { circlepoints, circlepath } from "fachwerk";
import { Resvg } from "@resvg/resvg-js";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <path
    d="${circlepoints(24, 50)
      .map((point) => circlepath(50, point))
      .join("")}"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
    transform="translate(100,100)"
  />
</svg>
`;

const png = new Resvg(svg).render().asPng();
await writeFile("./example1.png", png);
```

### Generating SVG with Vue and Node

Here's a more elaborate example how to use VueJS template for generating SVG:

```
import { writeFile } from "fs/promises";
import { Fachwerk } from "fachwerk";
import { Resvg } from "@resvg/resvg-js";

import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <path
    v-for="point in circlepoints(24,50)"
    :d="circlepath(50,point)"
    fill="none"
    stroke="lightblue"
    stroke-width="2"
    transform="translate(100,100)"
  />
</svg>
`;

const app = createSSRApp({
  template: svg,
});
app.use(Fachwerk);

const renderedSvg = await renderToString(app);
const png = new Resvg(renderedSvg).render().asPng();
await writeFile("./example2.png", png);
```
