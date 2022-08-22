import { Plugin } from "vue";

export * from "./components";
export * from "./utils";

import * as utils from "./utils";
import * as components from "./components";

export const Fachwerk: Plugin = {
  install: (app) => {
    Object.entries(components).forEach(([path, component]) => {
      app.component(path, component);
    });
    Object.entries(utils).forEach(
      ([name, util]) => (app.config.globalProperties[name] = util)
    );
  },
};
