// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://paris-aguilera.github.io',
  base: '/webTest',
  vite: {
    plugins: [tailwindcss()]
  }
});