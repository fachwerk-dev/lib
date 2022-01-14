import { Plugin, defineComponent, ComponentOptionsWithoutProps } from "vue";

import * as utils from "./utils";
export * from "./utils";

import * as components from "./components";
export * from "./components";

export const Fachwerk: Plugin = {
  install: (app) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(
        name,
        defineComponent(component as ComponentOptionsWithoutProps)
      );
    });
    Object.entries(utils).forEach(
      ([name, util]) => (app.config.globalProperties[name] = util)
    );
  },
};
