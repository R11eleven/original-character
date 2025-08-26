import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkGfm],
  },
});