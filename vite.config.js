import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/reactimagecreator/", // Important for GitHub Pages deployment
  plugins: [react()], // Necessary for React support
  build: {
    outDir: "dist", // Ensures Vite outputs to the correct folder
  },
});
