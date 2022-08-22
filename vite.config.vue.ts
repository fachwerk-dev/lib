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
      entry: path.resolve(__dirname, "src/vue.ts"),
      name: "fachwerk_vue",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        return {
          es: "vue.mjs",
          cjs: "vue.cjs",
          umd: "vue.js",
        }[format];
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames: "vue.css",
      },
    },
  },
});
