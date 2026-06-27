// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://matapadi.biz.id',
  integrations: [svelte(), sitemap()],
  output: "hybrid",
  adapter: cloudflare()
});