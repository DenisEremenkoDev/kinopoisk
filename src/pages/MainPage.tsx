import { CategorySection } from '@/features/movies/ui/CategorySection/CategorySection';
import { movieLists } from '@/features/movies/model/movieLists';

export const MainPage = () => {
  return (
    <div>
      <CategorySection header="Popular Movies" category={movieLists.Popular} />
      <CategorySection header="Top Rated Movies" category={movieLists.TopRated} />
      <CategorySection header="Upcoming Movies" category={movieLists.Upcoming} />
      <CategorySection header="Now Playing Movies" category={movieLists.NowPlaying} />
    </div>
  );
};
