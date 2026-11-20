import { z } from 'zod';

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number(),
});
export const MoviesResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MovieSchemasType = z.infer<typeof MovieSchema>;
export type MoviesResponseSchemaType = z.infer<typeof MoviesResponseSchema>;
