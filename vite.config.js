import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // IMPORTANT: because your site is hosted at
  // https://mohammadsoleiman.github.io/portfolio/
  base: "/portfolio/",

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },

  server: {
    port: 5173,
    open: true,
  },
});
