import { Outlet } from 'react-router-dom';
import { Header } from '@/common/components/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
