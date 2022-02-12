import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue({ reactivityTransform: true })],
  build: {
    outDir: "dist/internal",
    emptyOutDir: false,
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "src/internal.ts"),
      name: "fachwerk",
      fileName: (format) => {
        return {
          es: "internal.mjs",
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
