# Node

Fachwerk utility functions are available in NodeJS, both as ESM and CommonJS packages.

### Quickstart

Generate a template project, select **Node** as template:

```
npm create fachwerk
```

### Manual installation

```bash
npm install fachwerk
```

### Usage

Create the `example1.mjs`:

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/node/example1.mjs" />

And run:

```bash
node example1.mjs
```

### Generating SVG with Node

Here is an example how to use Fachwerk functions to generate SVG and convert it to PNG using [resvg-js](https://github.com/yisibl/resvg-js) package.

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/node/example2.mjs" />

### Generating SVG with Vue SSR and Node

Here's a more elaborate example how to use VueJS template for generating SVG:

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/node/example3.mjs" />
