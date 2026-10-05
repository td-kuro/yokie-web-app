import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from /<repo-name>/, so the Pages workflow sets
  // BASE_PATH. Firebase Hosting and local dev serve from the root.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
});
