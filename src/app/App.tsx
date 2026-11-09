import { router } from '@/app/router.tsx';
import { RouterProvider } from 'react-router-dom';

export const App = () => {
  return <RouterProvider router={router} />;
};
