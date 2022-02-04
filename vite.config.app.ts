import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import matter from "gray-matter";
import ViteVue from "@vitejs/plugin-vue";
import VitePages from "vite-plugin-pages";
import ViteMarkdown from "vite-plugin-md";
import ViteFonts from "vite-plugin-fonts";
import ViteIcons from "unplugin-icons/vite";

import { utoa } from "./src/internal/encoding";

function editorPlugin(md) {
  const defaultFence = md.renderer.rules.fence;
  md.renderer.rules.fence = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    const info = tokens[idx].info.trim();
    const content = tokens[idx].content;
    if (info === "md") {
      return `
        <Editor content="${utoa(content)}" />
      `;
    }
    return defaultFence(...arguments);
  };
  return md;
}

export default defineConfig({
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  plugins: [
    ViteVue({ reactivityTransform: true, include: [/\.vue$/, /\.md$/] }),
    VitePages({
      extensions: ["vue", "md"],
      dirs: "docs",
      extendRoute(route) {
        const routePath = path.resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(routePath, "utf-8");
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      },
    }),
    ViteMarkdown({
      wrapperComponent: "Layout",
      markdownItOptions: { typographer: false, breaks: true },
      markdownItSetup: (md) => md.use(editorPlugin),
    }),
    //@ts-ignore
    ViteFonts.default({
      google: {
        families: [
          {
            name: "IBM Plex Sans",
            styles: "ital,wght@0,400;0,500;0,700;1,400;1,500;1,700",
          },
          { name: "Cousine" },
        ],
      },
    }),
    ViteIcons({ autoInstall: true }),
  ],
  build: {
    emptyOutDir: false,
    outDir: "dist/docs",
  },
});
