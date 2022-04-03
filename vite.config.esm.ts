import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue({ reactivityTransform: true })],
  build: {
    emptyOutDir: false,
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "src/lib.esm.ts"),
      name: "fachwerk",
      fileName: (format) => {
        return {
          es: "fachwerk.mjs",
        }[format];
      },
    },
    rollupOptions: {
      external: ["vue", "three"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
