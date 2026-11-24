import { z } from 'zod';
import { movieSchema, moviesResponseSchema } from '@/features/movies/model/movies.schemas';

export type Movie = z.infer<typeof movieSchema>;
export type MoviesResponse = z.infer<typeof moviesResponseSchema>;
