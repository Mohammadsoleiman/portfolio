import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Auto-detect base path
export default defineConfig({
  plugins: [react()],
  // base: process.env.NODE_ENV === "production" ? "/portfolio/" : "/", // 👈 ensures CSS & JS load correctly on GitHub Pages
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


// https://mohammadsoleiman.github.io/portfolio/