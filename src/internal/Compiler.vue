<script lang="ts">
import {
  h,
  compile,
  ComponentOptions,
  watch,
  ref,
  RenderFunction,
  shallowRef,
} from "vue";
import type { CompilerError } from "@vue/compiler-core";

import Error from "./Error.vue";
import { utils } from "../lib.esm";

export const compileSource = (source: string) => {
  const errors = [];
  let code: RenderFunction | null = null;
  try {
    const compiledCode = compile(source, {
      onError: (err: any) => {
        errors.push(err);
      },
    });
    code = compiledCode;
  } catch (e) {
    errors.push(e);
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
  setup(props: any) {
    const compilerErrors = ref<CompilerError[] | null>(null);
    const compiledContent = shallowRef<ComponentOptions | null>(null);

    watch(
      () => props.content,
      (content, prevContent) => {
        const { code, errors } = compileSource(content);
        compilerErrors.value = errors as CompilerError[];
        if (errors.length) {
          const { code: prevCode } = compileSource(prevContent);
          compiledContent.value = renderComponent(prevCode as RenderFunction);
        } else {
          compiledContent.value = renderComponent(code as RenderFunction);
        }
      },
      { immediate: true }
    );
    return () =>
      compiledContent.value
        ? [
            h(compiledContent.value),
            h(
              "div",
              compilerErrors.value?.map(String).map((e) => h(Error, e))
            ),
          ]
        : null;
  },
};
</script>
