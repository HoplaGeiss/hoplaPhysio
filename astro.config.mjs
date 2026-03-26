// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Wichtig für Canonical URLs & Sitemap. In README ersetzen.
  site: 'https://example-physio-zuerich.ch',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});