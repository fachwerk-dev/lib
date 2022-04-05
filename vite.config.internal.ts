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
      formats: ["es", "cjs"],
      entry: path.resolve(__dirname, "src/internal.ts"),
      name: "fachwerk",
      fileName: (format) => {
        return {
          es: "internal.mjs",
          cjs: "internal.cjs",
        }[format];
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "internal.css";
          return assetInfo.name;
        },
      },
    },
  },
});
