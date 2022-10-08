import { GlobalStyle } from 'landingPage/globalStyles/global';
// import { lightTheme } from 'landingPage/globalStyles/theme';
import React from 'react';

// import { ThemeProvider } from 'styled-components';
import * as S from './styles';
// import { IProps } from './types';
type IProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: IProps) => {
  return (
    // <ThemeProvider theme={lightTheme}>
    <div>
      <GlobalStyle />
      <S.Layout>{children}</S.Layout>
    </div>
    // </ThemeProvider>
  );
};

export default Layout;
