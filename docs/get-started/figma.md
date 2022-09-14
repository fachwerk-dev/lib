# Fachwerk and Figma

To develop a Figma plugin and use Fachwerk functions you have several options:

### Use the command line

Run the following command, pick `Figma` template and follow the on-screen instructions:

```bash
npm init fachwerk@latest
```

### Create files manually

Can create following files in a plugin directory:

> Note that we can not use external libraries directly inside plugin. Instead, we import Fachwerk functions in `ui.html`, pass Fachwerk-generated data to the `code.js` and generate the graphics using `figma.` functions.

#### manifest.json

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/figma/manifest.json" />

#### ui.html

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/figma/code.js" />

#### code.js

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/figma/code.js" />
