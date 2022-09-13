<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { monaco } from "../functions/monaco";

const props = defineProps<{
  modelValue?: string;
}>();

const emit = defineEmits<(e: "update:modelValue", value: string) => string>();

const editorRef = ref(null);

monaco.editor.defineTheme("monacoTheme", {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#1F2937", // bg-gray-800
  },
});

onMounted(() => {
  const editor = monaco.editor.create(editorRef.value!, {
    language: "html",
    theme: "monacoTheme",
    fontSize: 15,
    fontFamily: "Cousine, monospace",
    wordWrap: "wordWrapColumn",
    wordWrapColumn: 70,
    lineNumbers: "off",
    renderLineHighlight: "none",
    minimap: {
      enabled: false,
    },
    padding: { top: 28 },
  });
  const model = editor.getModel();
  if (model) {
    model.updateOptions({ tabSize: 2 });
  }
  editor.onDidChangeModelContent((e) => {
    emit("update:modelValue", editor.getValue());
  });

  watch(
    () => props.modelValue,
    (content) => {
      if (content !== editor.getValue()) {
        if (model) {
          model.pushEditOperations(
            [],
            [
              {
                range: model.getFullModelRange(),
                text: content || "",
              },
            ],
            () => null
          );
        }
      }
    },
    { immediate: true }
  );
});
</script>

<template>
  <div ref="editorRef"></div>
</template>
