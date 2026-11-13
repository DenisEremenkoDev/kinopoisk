import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

type ThemeMode = 'light' | 'dark';

type ThemeState = { mode: ThemeMode };

const getInitialMode = (): ThemeMode => {
  if (localStorage.getItem('theme') === 'dark') {
    return 'dark';
  } else {
    return 'light';
  }
};

const initialState: ThemeState = { mode: getInitialMode() };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      if (state.mode === 'dark') {
        state.mode = 'light';
      } else {
        state.mode = 'dark';
      }
    },
  },
});
export const themeReducer = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
export const selectThemeMode = (state: RootState) => state.theme.mode;
