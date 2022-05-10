import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcss from "./postcss.config";

export default defineConfig({
  plugins: [vue({ reactivityTransform: true })],
  css: { postcss },
  build: {
    emptyOutDir: false,
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "src/slides.ts"),
      name: "slides",
      fileName: (format) => {
        return {
          es: "slides.mjs",
        }[format];
      },
    },
    rollupOptions: {
      external: ["vue", "fachwerk"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
