<script lang="ts">
import { h, ComponentOptions, watch, shallowRef } from "vue";

import * as functions from "../../functions";
import * as vueFunctions from "../../vue/functions";
import { compileTemplate } from "../functions/compiler";

export default {
  props: ["source"],
  emits: ["error"],
  setup(props: any, ctx: any) {
    const compiledSource = shallowRef<ComponentOptions | null>(null);
    watch(
      () => props.source,
      (source) => {
        const { code, errors } = compileTemplate(source);
        if (errors.length) {
          ctx.emit("error", errors);
        }
        compiledSource.value = {
          setup() {
            return { ...functions, ...vueFunctions };
          },
          render: code,
        };
      },
      { immediate: true }
    );
    return () => (compiledSource.value ? h(compiledSource.value) : null);
  },
};
</script>
