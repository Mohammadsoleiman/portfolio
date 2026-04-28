import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Auto-detect base path
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Always use repository subpath for production builds (GitHub Pages)
  base: command === "build" ? "/portfolio/" : "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
}));


// https://mohammadsoleiman.github.io/portfolio/