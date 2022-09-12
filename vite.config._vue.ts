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
      entry: path.resolve(__dirname, "src/_vue.ts"),
      fileName: (format) => {
        return {
          es: "vue.mjs",
        }[format];
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "vue.css";
          return assetInfo.name;
        },
      },
    },
  },
});
