import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/app/Layout';
import { CategoryPage } from '@/pages/CategoryPage';
import { FilteredPage } from '@/pages/FilteredPage';
import { SearchPage } from '@/pages/SearchPage';
import { FavoritesPage } from '@/pages/FavoritesPage';
import { MovieDetailsPage } from '@/pages/MovieDetailsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { MainPage } from '@/pages/MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'category/:type', element: <CategoryPage /> },
      { path: 'filtered', element: <FilteredPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: 'movie/:id', element: <MovieDetailsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
