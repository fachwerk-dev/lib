<script setup lang="ts">
import { computed, Ref, ref } from "vue";
import { on } from "../lib.esm";

// TODO: Move to utilities

function useDownloadSvg(svgRef: Ref<SVGElement | null>, filename: string) {
  const download = () => {
    if (svgRef.value) {
      const svgBlob = new Blob([svgRef.value!.outerHTML], {
        type: "image/svg+xml",
      });
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `${filename}.svg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };
  return download;
}

function useDownloadPng(svgRef: Ref<SVGElement | null>, filename: string) {
  const download = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    // TODO: get sizes from svgRef
    canvas.width = 300;
    canvas.height = 300;
    const image = new Image();
    image.src = "data:image/svg+xml;base64," + btoa(svgRef.value!.outerHTML);
    ctx?.drawImage(image, 0, 0);

    canvas.toBlob((svgBlob) => {
      if (svgBlob) {
        const url = URL.createObjectURL(svgBlob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `${filename}.png`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    });
  };
  return download;
}

const {
  width = 300,
  height = 300,
  padding = 0,
  centered = false,
  id = null,
} = defineProps<{
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  centered?: boolean;
  id?: string;
}>();

const svgRef = ref(null);

const svgData = computed(() => {
  const p = parseFloat(String(padding));
  const w = parseFloat(String(width)) + p * 2;
  const h = parseFloat(String(height)) + p * 2;
  const viewBox = centered
    ? `-${w / 2} -${h / 2} ${w} ${h}`
    : `-${p} -${p} ${w} ${h}`;
  const style = {
    maxWidth: `${w}px`,
  };
  return { viewBox, style };
});

const downloadSvg = useDownloadSvg(svgRef, id || "fachwerk");
const downloadPng = useDownloadPng(svgRef, id || "fachwerk");

on("downloadsvg", (svgId: string) => {
  if (id && id === svgId) {
    downloadSvg();
  }
});

on("downloadpng", (pngId: string) => {
  if (id && id === pngId) {
    downloadPng();
  }
});
</script>

<template>
  <svg
    ref="svgRef"
    xmlns="http://www.w3.org/2000/svg"
    :view-box.camel="svgData.viewBox"
    :style="svgData.style"
  >
    <slot />
  </svg>
</template>
