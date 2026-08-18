// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import vercel from '@astrojs/vercel';

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  adapter: isVercel ? vercel() : cloudflare(),
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
