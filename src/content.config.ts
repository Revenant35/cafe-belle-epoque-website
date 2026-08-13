import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    time:        z.string(),
    description: z.string(),
    location:    z.string().optional(),
    price:       z.string().optional(),
    ticketed:    z.boolean().optional().default(false),
    cancelled:   z.boolean().optional().default(false),
  }),
});

export const collections = { events };
