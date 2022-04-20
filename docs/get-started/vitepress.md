# Vitepress and Fachwerk

There are several ways to get started with Vitepress and Fachwerk:

### Use Slackblitz

<Button href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vitepress?file=docs%2Findex.md&title=Fachwerk+Vite">Open in Slackblitz</Button>

Open Vitepress + Fachwerk sample project in Stackblitz and start editing the project right in the browser.

### Use the command line

Run the following command:

```bash
npm init fachwerk
```

Next, pick a **Vitepress** template and follow the on-screen instructions.

### Add Fachwerk to existing Vitepress project

It is easy to modify Vitepress installation to support Fachwerk. First, install Fachwerk:

```bash
npm install fachwerk
```

Then, edit `.vitepress/theme/index.js` as follows to install the Fachwerk plugin amd import the styles:

```js{4-5,10}
// ./docs/.vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import { Fachwerk } from "fachwerk";
import "fachwerk/fachwerk.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Fachwerk);
  },
};
```

We recommend VueJS reactivity transforms, an upcoming syntax for reactive variables. Reactivity transforms are not _required_ to use Fachwerk, but a lot of Fachwerk documentation refers to this syntax.

Modify the `.vitepress//config.js` as follows:

```js{6}
// ./docs/.vitepress/config.js

import { defineConfig } from "vitepress";

export default defineConfig({
  vue: { reactivityTransform: true },
  // ...rest of the config...
});
```

You can now use Fachwerk components, utility functions, and state in Vitepress documents.
