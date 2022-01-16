# Vitepress and Fachwerk

There are several ways to get started with Vitepress and Fachwerk:

### 🅐 Use Slackblitz

<a href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vitepress?file=docs%2Findex.md" target="_blank"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"/></a>

Open Vitepress + Fachwerk sample project in Stackblitz and start editing the project right in the browser.

### 🅑 Use Github template

[Clone](https://github.com/fachwerk-dev/create-fachwerk/generate) the Github template project [fachwerk-dev/create-fachwerk](https://github.com/fachwerk-dev/create-fachwerk)

### 🅒 Use the command line

Run the following commands:

```bash
npx degit fachwerk-dev/create-fachwerk create-fachwerk
cd create-fachwerk/vitepress
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

We recommend VueJS reactivity transforms, an upcoming syntax for reactive variables. Reactivity transforms are not _required_ to use Fachwerk, but a lot of Fachwerk documentation refers to this syntax.

Modify the `config.js` as follows:

```js{6}
// ./docs/.vitepress/config.js

import { defineConfig } from "vitepress";

export default defineConfig({
  vue: { reactivityTransform: true },
  // ...rest of the config...
});
```

You can now start to use Fachwerk components, utility functions, and state in your Markup documents.
