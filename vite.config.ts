import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue({ reactivityTransform: true })],
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/lib.ts"),
      name: "fachwerk",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        return {
          es: "fachwerk.mjs",
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
