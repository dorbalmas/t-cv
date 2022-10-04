import { ThemeProvider } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo } from 'react';

import { rtlLanguages } from '@/config/languages';
import { darkTheme, lightTheme } from '@/config/theme';
import { ltrStyleChanges, rtlStyleChanges } from '@/config/theme';
import { setTheme } from '@/store/build/buildSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
const ThemeWrapper: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const { i18n } = useTranslation();

  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.build.theme);

  const isDarkMode = useMemo(() => theme === 'dark', [theme]);

  const muiTheme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  useEffect(() => {
    if (theme === undefined) {
      dispatch(setTheme({ theme: 'dark' }));
    }
  }, [theme, dispatch]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={muiTheme(rtlLanguages.includes(i18n.language) ? rtlStyleChanges : ltrStyleChanges)}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
