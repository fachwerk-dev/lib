# Deno

Fachwerk utility functions are available in Deno.

### Command line

Run the following command, pick `Deno` template and follow the on-screen instructions:

```
npm create fachwerk@latest
```

### Usage

Create the `index.mjs`:

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/deno/example1.js" />

And run:

```bash
deno run index.js
```

### Generating SVG with Deno

Here is an example how to use Fachwerk functions to generate SVG and convert it to PNG:

Create a `example2.js`:

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/deno/example2.js" />

Run it with

```bash
deno run --allow-net --allow-write example2.js
```
