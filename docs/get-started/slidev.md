# Slidev and Fachwerk

### Setup

To use Fachwerk components and utility function with [Slidev](https://sli.dev/), you will need to add a `/setup/main.ts` configuration file:

```ts
// /setup/main.ts

import { defineAppSetup } from "@slidev/types";
import { Fachwerk } from "fachwerk";
import "fachwerk/style.css";

export default defineAppSetup(({ app }) => {
  app.use(Fachwerk);
});
```

To support reactive variables syntax, it is recommended to configure Slidev to support it by adding Vite config file `/vite.config.ts`:

```ts
// /vite.config.ts

import { defineConfig } from "vite";

export default defineConfig({
  slidev: {
    vue: {
      reactivityTransform: true,
    },
  },
});
```

You can now start editing `/slides.md` and add Fachwerk components and utilities there.

### Note on math expressions

Slidev has a built-in support for KaTex-based math expression, very similar to Fachwerk with one key difference: **Fachwerk's `<f-math>` component allows to use reactive variables inside math expressions** while Slidev math is just static.

Here is an example to illustrate the difference:

```html
<f-slider v-model="v.x" />

Fachwerk: <f-math>x = {{ v.x }}</f-math>

Slidev: $x = {{ v.x }}$
```

<f-slider v-model="v.x" />

Fachwerk: <f-math>x = {{ v.x }}</f-math>

Slidev: <f-math>x = v.x </f-math>
