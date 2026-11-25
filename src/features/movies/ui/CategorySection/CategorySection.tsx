import { type MovieListsType } from '@/features/movies/model/movieLists';
import { Link } from 'react-router-dom';
import { MovieCard } from '@/features/movies/ui/MovieCard/MovieCard';
import { useMovieCategoryQuery } from '@/features/movies/api/moviesApi';
import s from './CategorySection.module.css';

type Props = {
  header: string;
  category: MovieListsType;
};

export const CategorySection = ({ header, category }: Props) => {
  const movies = useMovieCategoryQuery(category);
  const cardsSlice = movies.data?.results.slice(0, 6);

  return (
    <div>
      <h1>{header}</h1>
      <Link to={`category/${category}`}>View More</Link>
      <div className={s.list}>
        {cardsSlice ? (
          cardsSlice.map((card) => {
            return <MovieCard movie={card} key={card.id} />;
          })
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};
