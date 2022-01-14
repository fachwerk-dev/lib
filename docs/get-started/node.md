# Node

Fachwerk utilify functions are also available in NodeJS, both as CommonJS and ESM packages.

### Installation

```bash
npm install fachwerk
```

### Usage with CommonJS

Edit the `index.cjs` as follows:

```js
// index.cjs

const { hsl } = require("fachwerk");
console.log(hsl(100));
```

Then run

```bash
node index.cjs
```

### Usage with ESM

Edit the `index.mjs` as follows:

```js
// index.mjs

import { hsl } from "fachwerk";
console.log(hsl(100));
```

Then run

```bash
node index.mjs
```
