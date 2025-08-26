import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      images: z.array(z.string()).optional(),
      pubDate: z.date(),
      tags: z.array(z.string()).default([]),
    }),
  }),
};