# Vite and Fachwerk

There are multiple ways to get started with Vite and Fachwerk:

### Use Slackblitz

<Button href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vite?file=src%2Findex.md&title=Fachwerk+Vite">Open in Stackblitz</Button>

Open Vite + Fachwerk project in Stackblitz and start editing the project right in the browser.

### 🅑 Use the command line

Run the following command:

```bash
npm init fachwerk
```

Next, pick a **Vite** template and follow the on-screen instructions.

### 🅒 Add Fachwerk to existing Vite project

Your can also use the standard [Vite installer](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). Choose either `vue` or `vue-ts` project when setting up a project.

```bash
npm init vite
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

Finally, add `/src/index.md` to use Markdown and Fachwerk syntax. Note that `/src/App.vue` is no longer needed and can be removed.
