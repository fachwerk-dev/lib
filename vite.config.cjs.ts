import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcss from './postcss.config.js'

export default defineConfig({
  plugins: [vue({ reactivityTransform: true })],
  css: { postcss },
  build: {
    emptyOutDir: false,
    lib: {
      formats: ["cjs", "umd"],
      entry: path.resolve(__dirname, "src/lib.cjs.ts"),
      name: "fachwerk",
      fileName: (format) => {
        return {
          cjs: "fachwerk.cjs",
          umd: "fachwerk.js",
        }[format];
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
