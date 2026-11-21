import { z } from 'zod';

export const movieSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number().min(0).max(10),
});

export const moviesResponseSchema = z.object({
  page: z.number().int(),
  results: z.array(movieSchema),
  total_pages: z.number().int(),
  total_results: z.number().int(),
});
