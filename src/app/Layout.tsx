import { Outlet } from 'react-router-dom';
import { Header } from '@/common/components/Header/Header';
import { Footer } from '@/common/components/Footer/Footer';
import s from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.wrap}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
