import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import { Fachwerk } from "./lib.es";
import VEditor from "./internal/VEditor.vue";

import App from "./App.vue";
import "./app.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(Fachwerk);
app.component("VEditor", VEditor);
app.mount("#app");
