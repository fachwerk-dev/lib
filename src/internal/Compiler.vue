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
  props: ["content"],
  emits: ["error"],
  setup(props: any, ctx: any) {
    const compiledContent = shallowRef<ComponentOptions | null>(null);
    watch(
      () => props.content,
      (content, prevContent) => {
        const { code, errors } = compileSource(content);
        if (errors.length) {
          ctx.emit("error", errors);
          const { code: prevCode } = compileSource(prevContent);
          compiledContent.value = renderComponent(prevCode as RenderFunction);
        } else {
          ctx.emit("error", null);
          compiledContent.value = renderComponent(code as RenderFunction);
        }
      },
      { immediate: true }
    );
    return () => (compiledContent.value ? h(compiledContent.value) : null);
  },
};
</script>
