# Vitepress and Fachwerk

There are several ways to get started with Vitepress and Fachwerk:

### 🅐 Use Slackblitz

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/fachwerkdev/fachwerk-vitepress?file=docs%2Findex.md)

Open Vitepress + Fachwerk sample project in Stackblitz and start editing the project right in the browser.

### 🅑 Use Github template

[Clone](https://github.com/fachwerkdev/fachwerk-vitepress/generate) the Github template project [fachwerkdev/fachwerk-vitepress](https://github.com/fachwerkdev/fachwerk-vitepress)

### 🅒 Use the command line

Run the following commands:

```bash
npx degit fachwerkdev/fachwerk-vitepress
npm install
npm run dev
```

### 🅓 Modify existing Vitepress installation

It is easy to modify Vitepress installation to support Fachwerk. First, install Fachwerk:

```bash
npm install fachwerk
```

Then, edit `config.js` as follows to install Fachwerk plugin for Vue and import the Fachwerk styles:

```js{4-5,10}
// ./docs/.vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import { Fachwerk } from "fachwerk";
import "fachwerk/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Fachwerk);
  },
};
```

It is also recommended to support Vue's upcoming reactivity
transforms, an upcoming syntax for reactive variables.

Modify the `config.js` as follows:

```js{6}
// ./docs/.vitepress/config.js

import { defineConfig } from "vitepress";

export default defineConfig({
  vue: { reactivityTransform: true },
  // ...rest of the config...
});
```

:::info

Reactivity transforms are not _required_ to use Fachwerk, but a lot of documentation refers to this syntax.

:::

You can now start to use Fachwerk components, utility functions and state in your Markup documents.
