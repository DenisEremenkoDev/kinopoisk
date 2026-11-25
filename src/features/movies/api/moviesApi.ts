import { baseApi } from '@/app/baseApi';
import type { MoviesResponse } from '@/features/movies/api/moviesApi.types';
import type { MovieListsType } from '@/features/movies/model/movieLists';

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    movieCategory: build.query<MoviesResponse, MovieListsType>({
      query: (category) => `movie/${category}`,
    }),
  }),
});

export const { useMovieCategoryQuery } = moviesApi;
