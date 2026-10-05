import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Relative asset URLs, so the build works from any path: the root (Firebase Hosting,
  // custom domain) or a sub-folder (GitHub Pages project site at /<repo-name>/).
  base: './',
  plugins: [react()],
});
