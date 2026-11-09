import { Link, NavLink } from 'react-router-dom';
import logo from '@/assets/TMDB.svg';
import s from './Header.module.css';

const getLinksClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${s.link} ${s.active}` : s.link;

export const Header = () => {
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
        <p>тема</p>
      </div>
    </header>
  );
};
