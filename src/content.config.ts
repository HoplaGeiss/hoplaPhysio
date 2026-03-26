import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().int().nonnegative().default(0),
    featured: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    credentials: z.array(z.string()).default([]),
    specialties: z.array(z.string()).default([]),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    order: z.number().int().nonnegative().default(0),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: 'settings.json', base: './src/content/site' }),
  schema: z.object({
    practiceName: z.string(),
    tagline: z.string(),
    locationShort: z.string(),
    phone: z.string(),
    email: z.string().email(),
    addressLines: z.array(z.string()).min(1),
    postalCodeCity: z.string(),
    canton: z.string().default('ZH'),
    certifications: z.array(z.string()).default([]),
    yearsExperience: z.number().int().nonnegative().default(0),
    openingHoursNote: z.string().optional(),
    googleMapsEmbedUrl: z.string().optional(),
  }),
});

const openingHours = defineCollection({
  loader: glob({ pattern: 'hours.json', base: './src/content/openingHours' }),
  schema: z.object({
    rows: z.array(
      z.object({
        label: z.string(),
        hours: z.string(),
      }),
    ),
    phoneHoursNote: z.string().optional(),
  }),
});

export const collections = { services, team, site, openingHours };

