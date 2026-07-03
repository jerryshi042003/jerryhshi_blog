import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    image: z.string().optional(),
    // Body-of-work fields: the scene a piece came from and the people in it.
    // Optional and backward-compatible — existing posts omit them.
    scene: z.string().optional(),
    people: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
