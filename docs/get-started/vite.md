# Vite and Fachwerk

There are multiple ways to get started with Vite and Fachwerk:

### 🅐 Use Slackblitz

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/fachwerkdev/fachwerk-examples/tree/main/vite?file=src%2Findex.md)

Open Vite + Fachwerk project in Stackblitz and start editing the project right in the browser.

### 🅑 Use Github template

[Clone](https://github.com/fachwerkdev/fachwerk-examples/generate) the Github template project [fachwerkdev/fachwerk-vite](https://github.com/fachwerkdev/fachwerk-examples)

### 🅒 Use the command line

Run the following commands:

```bash
npx degit fachwerkdev/fachwerk-examples fachwerk-examples
cd fachwerk-examples/vite
npm install
npm run dev
```

### 🅓 Use Vite installer and add Fachwerk

Your can also use the standard [Vite installer](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). Choose either `vue` or `vue-ts` project when setting up a project.

```bash
npm init vite@latest
```

Next, install Fachwerk and `vite-plugin-md` (for Markdown support)

```bash
npm install fachwerk vite-plugin-md
```

Next, add reactive variables shortcuts and Markdown support to `/vite.config.js`.

```js{3,7-8}
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import markdown from "vite-plugin-md";

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true, include: [/\.vue$/, /\.md$/] }),
    markdown(),
  ],
});
```

Next, modify the `/src/main.js` as follows:

```js
import { createApp } from "vue";
import { Fachwerk } from "fachwerk";
import "fachwerk/style.css";
import "./style.css";

import index from "./index.md";

const app = createApp(index);
app.use(Fachwerk);
app.mount("#app");
```

Finally, add `/src/index.md` where you can use Markdown and Fachwerk syntax.

Note that `/src/App.vue` is no longer needed and can be removed.
