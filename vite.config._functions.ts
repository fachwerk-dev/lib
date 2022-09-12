import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcss from "./postcss.config";

export default defineConfig({
  plugins: [vue({ reactivityTransform: true })],
  css: { postcss },
  build: {
    rollupOptions: {
      external: ["vue"],
    },
    emptyOutDir: true,
    lib: {
      formats: ["es", "cjs", "umd"],
      entry: path.resolve(__dirname, "src/_functions.ts"),
      name: "fachwerk",
      fileName: (format) => {
        return {
          es: "fachwerk.mjs",
          cjs: "fachwerk.cjs",
          umd: "fachwerk.js",
        }[format];
      },
    },
  },
});
