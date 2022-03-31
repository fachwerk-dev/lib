<script lang="ts">
import {
  h,
  compile,
  ComponentOptions,
  watch,
  RenderFunction,
  shallowRef,
} from "vue";
import type { CompilerError } from "@vue/compiler-core";

import Error from "./Error.vue";
import { utils } from "../lib.esm";
import { on } from "../utils";

export const compileSource = (source: string) => {
  const errors: CompilerError[] = [];
  let code: RenderFunction | null = null;
  try {
    const compiledCode = compile(source, {
      onError: (err: any) => {
        errors.push(err);
      },
    });
    code = compiledCode;
  } catch (e) {
    errors.push(e as CompilerError);
  }
  return { code, errors };
};

const renderComponent = (render: RenderFunction) => {
  return {
    setup() {
      return { ...utils };
    },
    render,
  };
};

export default {
  props: ["source"],
  emits: ["error"],
  setup(props: any, ctx: any) {
    const compiledSource = shallowRef<ComponentOptions | null>(null);
    watch(
      () => props.source,
      (source) => {
        const { code, errors } = compileSource(source);
        if (errors.length) {
          ctx.emit("error", errors);
        }
        compiledSource.value = renderComponent(code as RenderFunction);
      },
      { immediate: true }
    );
    return () => (compiledSource.value ? h(compiledSource.value) : null);
  },
};
</script>
