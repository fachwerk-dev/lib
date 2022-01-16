import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue({ reactivityTransform: true })],
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
