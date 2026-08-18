// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare(),
  site: 'https://decisionengines.ai',
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp', config: { limitInputPixels: false } },
  },
  vite: {
    ssr: {
      external: ['sharp'],
    },
  },
  integrations: [tailwind(), sitemap()],
  server: {
    port: 4321,
  },
});
