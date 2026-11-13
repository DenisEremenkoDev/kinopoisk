import { Outlet } from 'react-router-dom';
import { Header } from '@/common/components/Header/Header';
import { Footer } from '@/common/components/Footer/Footer';
import s from './Layout.module.css';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { selectThemeMode } from '@/features/theme/themeSlice';
import { useEffect } from 'react';

export const Layout = () => {
  const mode = useAppSelector(selectThemeMode);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem('theme', mode);
  }, [mode]);

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
