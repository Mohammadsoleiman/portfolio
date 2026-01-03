import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'public/img', dest: '' },
        { src: 'public/icons', dest: '' },
        { src: 'public/MohammadSoleimanCV.pdf', dest: '' }
      ]
    })
  ],
  base: "/",
});