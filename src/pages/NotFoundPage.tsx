import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h1>Page not found.</h1>
      <Link to="/" className={s.link}>
        Back to Main
      </Link>
    </div>
  );
};
