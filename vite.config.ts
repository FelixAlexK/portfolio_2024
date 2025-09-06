import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-md";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    tailwindcss(),

  ],
  assetsInclude: ["**/*.JPEG", "**/*.jpeg", "**/*.jpg"],
});
