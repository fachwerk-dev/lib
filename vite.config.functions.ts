import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      name: "f",
      formats: ["es", "cjs", "umd"],
      entry: path.resolve(__dirname, "src/functions.ts"),
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
