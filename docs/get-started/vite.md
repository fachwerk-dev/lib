# Vue and Fachwerk

There are multiple ways to get started with Vue and Fachwerk, powered by Vite.

### Use Slackblitz

Open the project in Stackblitz and start editing right in the browser:

<Button href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vite?file=src%2Findex.md&title=Vue+and+Vite+and+Fachwerk"><IconStackblitz class="text-blue-500" />Open in Stackblitz</Button>

### Use the command line

Run the following command, pick `Vue` template and follow the on-screen instructions:

```bash
npm init fachwerk@latest
```

### Add Fachwerk to existing Vue project

Install Fachwerk and `vite-plugin-md` (for Markdown support)

```bash
npm install fachwerk vite-plugin-md
```

Next, add reactive variables shortcuts and Markdown support to `/vite.config.js`.

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/vite/vite.config.js" />

Next, modify the `/src/main.js` as follows:

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/vite/src/main.js" />

Finally, add `/src/index.md` to use Markdown and Fachwerk syntax:

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/vite/src/index.md" />

> Note that `/src/App.vue` is no longer needed and can be removed.
