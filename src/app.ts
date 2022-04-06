import { createApp, h, shallowRef, watchEffect } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import routes from "virtual:generated-pages";
import { Fachwerk } from "./lib.esm";

import App from "./App.vue";
import Layout from "./internal/Layout.vue";
import Editor from "./internal/Editor.vue";
import Button from "./internal/Button.vue";
import Icon from "./internal/Icon.vue";

import "./app.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(Fachwerk);

// Used by vue-markdown
app.component("Layout", Layout);

// Used inside markdown documents
app.component("Editor", Editor);
app.component("Button", Button);
app.component("Icon", Icon);

app.mount("#app");
