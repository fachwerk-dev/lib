import { defineComponent, Plugin, ComponentOptionsWithoutProps } from "vue";

import * as functions from "./functions";
import * as components from "./vue/components";
import * as vueFunctions from "./vue/functions";

export const Fachwerk: Plugin = {
  install: (app) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(
        name,
        defineComponent(component as ComponentOptionsWithoutProps)
      );
    });
    Object.entries({ ...functions, ...vueFunctions }).forEach(
      ([name, fn]) => (app.config.globalProperties[name] = fn)
    );
  },
};

export * from "./vue/components";
export * from "./vue/functions";

export { default as Content } from "./app/components/Content.vue";
