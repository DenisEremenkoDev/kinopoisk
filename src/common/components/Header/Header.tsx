import { Link, NavLink } from 'react-router-dom';
import logo from '@/assets/TMDB.svg';
import s from './Header.module.css';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import { selectThemeMode, toggleTheme } from '@/features/theme/themeSlice';
import { useAppSelector } from '@/common/hooks/useAppSelector';

const getLinksClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${s.link} ${s.active}` : s.link;

export const Header = () => {
  const mode = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();

  const themeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={s.header}>
      <Link to="/">
        <img src={logo} alt="TMDB" className={s.logo} />
      </Link>

      <nav>
        <ul className={s.list}>
          <li>
            <NavLink to="/" end className={getLinksClass}>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/popular" className={getLinksClass}>
              Category Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/filtered"

              className={getLinksClass}
            >
              Filtered Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"

              className={getLinksClass}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"

              className={getLinksClass}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <button type={'button'} onClick={themeHandler}>
          {mode === 'dark' ? 'light' : 'dark'}
        </button>
      </div>
    </header>
  );
};
