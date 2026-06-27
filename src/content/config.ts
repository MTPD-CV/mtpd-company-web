import { z, defineCollection } from 'astro:content';

const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Tim Peneliti MATAPADI'),
    tags: z.array(z.string()),
    image: z.string().optional(),
    isCaseStudy: z.boolean().default(true)
  })
});

export const collections = {
  'research': researchCollection,
};
