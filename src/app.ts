import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import routes from "virtual:generated-pages";
import { Fachwerk } from "./lib.esm";
import App from "./App.vue";
import Editor from "./internal/Editor.vue";

import "./app.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(Fachwerk);
app.component("Editor", Editor);
app.mount("#app");
