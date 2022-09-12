import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import routes from "virtual:generated-pages";
import { Fachwerk } from "./vue";

import App from "./App.vue";

import Layout from "./internal/Layout.vue";
import Editor from "./internal/Editor.vue";
import Button from "./internal/Button.vue";

import IconStackblitz from "~icons/bx/bxs-zap";
import IconVue from "~icons/bx/bxl-vuejs";

import "./app.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(Fachwerk);

app.component("Layout", Layout);
app.component("Editor", Editor);
app.component("Button", Button);

app.component("IconStackblitz", IconStackblitz);
app.component("IconVue", IconVue);

app.mount("#app");
