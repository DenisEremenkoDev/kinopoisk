import { Link } from 'react-router-dom';
import type { Movie } from '@/features/movies/api/moviesApi.types';
import { getImageUrl } from '@/common/utils/getImageUrl';
import noPoster from '@/assets/noPoster.jpeg';
import { getRatingColor } from '@/common/utils/getRatingColor';
import s from './MovieCard.module.css';

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const posterUrl = getImageUrl(movie.poster_path);

  const likeHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    // логику избранного добавим на этапе 5
  };

  const color = getRatingColor(movie.vote_average);

  return (
    <Link to={`/movie/${movie.id}`} className={s.card}>
      {posterUrl ? (
        <img alt={movie.title} src={posterUrl} />
      ) : (
        <img src={noPoster} alt={movie.title} />
      )}

      <h3>{movie.title}</h3>

      <span className={color === 'red' ? s.red : color === 'yellow' ? s.yellow : s.green}>
        {movie.vote_average}
      </span>

      <button type="button" onClick={likeHandler}>
        ❤️
      </button>
    </Link>
  );
};
