export const movieLists = {
  Popular: 'popular',
  TopRated: 'top_rated',
  Upcoming: 'upcoming',
  NowPlaying: 'now_playing',
} as const;

export type MovieListsType = (typeof movieLists)[keyof typeof movieLists];
