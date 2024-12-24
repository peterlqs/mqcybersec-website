import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      url: z.string().url(),
      featured: z.number().min(1).optional(),
    }),
});

const gridImages = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image()
    }),
});

const people = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string().min(1),
      image: image().optional(),
      socials: z
        .array(
          z.object({
            platform: z.string(),
            url: z.string().url(),
            icon: z.string()
          })
        )
        .optional(),
      enrollments: z.array(
        z.object({
          year: z.number().int().positive(),
          role: z.string().min(1).optional()
        })
      )
    })
});

const placementSchema = z.object({
  year: z.number(),
  teamName: z.string().optional(),
  globalPlacement: z.number(),
  australiaPlacement: z.number().optional(),
  totalTeams: z.number().optional(),
});

export const ctfs = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    name: z.string(),
    image: image().optional(),
    placements: z.array(placementSchema),
  }),
});

export const collections = {
  showcase,
  people,
  ctfs,
  gridImages
};