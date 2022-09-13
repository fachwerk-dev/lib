# Vitepress and Fachwerk

There are several ways to get started with Vitepress and Fachwerk.

### Use Slackblitz

<Button href="https://stackblitz.com/fork/github/fachwerk-dev/create-fachwerk/tree/main/vitepress?file=docs%2Findex.md&title=Fachwerk+Vitepress"><IconStackblitz class="text-blue-500" />Open in Slackblitz</Button>

Open Vitepress + Fachwerk sample project in Stackblitz and start editing the project right in the browser.

### Use the command line

Run the following command:

```bash
npm init fachwerk@latest
```

Next, pick a **Vitepress** template and follow the on-screen instructions.

### Add Fachwerk to existing Vitepress project

It is easy to modify Vitepress installation to support Fachwerk. First, install Fachwerk:

```bash
npm install fachwerk
```

Then, edit `.vitepress/theme/index.js` as follows to install the Fachwerk plugin amd import the styles:

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/vitepress/docs/.vitepress/theme/index.js" />

### Reactivity transforms

We recommend VueJS [reactivity transforms](https://vuejs.org/guide/extras/reactivity-transform.html) for a better developer experience. This feature is not _required_ to use Fachwerk, but a lot of documentation refers to this syntax.

Modify the `.vitepress/config.js` as follows:

<Snippet src="https://raw.githubusercontent.com/fachwerk-dev/create-fachwerk/main/vitepress/docs/.vitepress/config.js" />

You can now use Fachwerk components, utility functions, and state in Vitepress documents.
