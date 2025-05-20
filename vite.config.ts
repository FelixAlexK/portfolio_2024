import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-md";
import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    tailwindcss(),
    nodePolyfills({
      include: ["fs"],

      protocolImports: true,
    }),
  ],
  assetsInclude: ["**/*.JPEG", "**/*.jpeg", "**/*.jpg"],
});
