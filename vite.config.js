import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = fileURLToPath(new URL('.', import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  // Relative asset URLs, so the build works from any path: the root (Firebase Hosting,
  // custom domain) or a sub-folder (GitHub Pages project site at /<repo-name>/).
  base: './',
  plugins: [react()],
  build: {
    // One HTML file per page. Each loads the same app; <div id="root" data-page="…"> picks the page.
    rolldownOptions: {
      input: {
        home: resolve(root, 'index.html'),
        terms: resolve(root, 'terms/index.html'),
      },
    },
  },
});
