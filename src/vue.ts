import { defineAsyncComponent, Plugin } from "vue";

// //@ts-ignore
// export const components = import.meta.glob("./components/*.vue");

// import * as utils from "./utils";

// export const Fachwerk: Plugin = {
//   install: (app) => {
//     Object.entries(components).forEach(([path, component]) => {
//       const name = path.split("/").slice(-1)[0].replace(".vue", "");
//       app.component(name, defineAsyncComponent(component as any));
//     });
//     Object.entries(utils).forEach(
//       ([name, util]) => (app.config.globalProperties[name] = util)
//     );
//   },
// };

export * from "./components";
export * from "./utils";

const components = import.meta.glob("./components/*.vue", { eager: true });
console.log(components);

import * as utils from "./utils";

console.log({ ...components });

export const Fachwerk: Plugin = {
  install: (app) => {
    Object.entries(components).forEach(([path, component]) => {
      // console.log(path)
      //const name = path.split("/").slice(-1)[0].replace(".vue", "");
      //app.component(name, defineAsyncComponent(component as any));
    });
    Object.entries(utils).forEach(
      ([name, util]) => (app.config.globalProperties[name] = util)
    );
  },
};
