<script setup lang="ts">
import { computed, Ref, ref } from "vue";
import { on, seq, polygonpath, rectgridpath, translate } from "../lib.esm";

// TODO: Move to utilities

function useSvgDownload(svgRef: Ref<SVGElement | null>, filename: string) {
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

// TODO: Move to Props type

const {
  width = 300,
  height = 300,
  padding = 0,
  centered = false,
  linegrid = false,
  rectgrid = false,
  id = null,
} = defineProps<{
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  centered?: boolean;
  linegrid?: boolean;
  rectgrid?: boolean;
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
  const translate = centered
    ? [parseFloat(String(width)) / -2, parseFloat(String(height)) / -2]
    : [0, 0];
  return { viewBox, style, translate };
});

if (id) {
  const download = useSvgDownload(svgRef, id);

  on("downloadsvg", (svgId: string) => {
    if (id && id === svgId) {
      download();
    }
  });
}
</script>

<template>
  <svg
    ref="svgRef"
    xmlns="http://www.w3.org/2000/svg"
    :view-box.camel="svgData.viewBox"
    :style="svgData.style"
  >
    <slot />
    <template v-if="linegrid">
      <path
        id="linegrid"
        :d="
          seq(5)
            .map((n) =>
              polygonpath([
                [n * 100, 0],
                [n * 100, 50],
              ])
            )
            .join('')
        "
        :transform="translate(...svgData.translate)"
        fill="none"
        stroke="black"
        stroke-width="2"
        opacity="0.1"
      />
    </template>
    <template v-if="rectgrid">
      <path
        id="rectgrid"
        :d="rectgridpath(4, 100)"
        :transform="translate(...svgData.translate)"
        fill="none"
        stroke="black"
        stroke-width="2"
        opacity="0.1"
      />
    </template>
  </svg>
</template>
