import {
  defineComponent,
  Plugin,
  ComponentOptionsWithoutProps,
  reactive,
} from "vue";
import mitt from "mitt";

import * as components from "./components";
import * as functions from "./functions";

export * from "./components";

export const data = reactive<Record<string, any>>({});

const emitter = mitt();

export function emit(name: string, payload?: any): void {
  emitter.emit(name, payload);
}

export function on(name: string, handler = (payload?: any) => {}): void {
  emitter.on(name, handler);
}

export const Fachwerk: Plugin = {
  install: (app) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(
        name,
        defineComponent(component as ComponentOptionsWithoutProps)
      );
    });
    Object.entries({ ...functions, data, emit, on }).forEach(
      ([name, fn]) => (app.config.globalProperties[name] = fn)
    );
  },
};
