<script setup lang="ts">
import { ref, Ref, provide } from "vue";
import { PDFDocument, PDFPage } from "pdf-lib";

const width = 100;
const height = 100;

export type Context = {
  pdf: Ref<PDFDocument | null>;
  page: Ref<PDFPage | null>;
  width: number;
  height: number;
  update: () => void;
  transforms: string[];
};

const context: Context = {
  pdf: ref(null),
  page: ref(null),
  width,
  height,
  update: () => {
    if (context.pdf.value) {
      context.pdf.value
        .saveAsBase64({ dataUri: true })
        .then((pdfSrc: string) => (src.value = pdfSrc));
    }
  },
  transforms: [], // @TODO Allow f-pdf transforms
};

const src = ref("");

PDFDocument.create().then((pdfDocument) => {
  if (context) {
    context.pdf.value = pdfDocument;
    context.pdf.value.addPage([width, height]);
    context.page.value = context.pdf.value.getPages()[0];
    context.update();
  }
});

provide("context", context);
</script>

<template>
  <slot />
  <iframe
    :height="height"
    :width="height"
    :src="src"
    frameborder="0"
    scrolling="no"
  />
</template>
