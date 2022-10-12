// import { Page } from '@/components/landingPage/core/utils';
import { defaultTheme, styled } from '@/components/landingPage/globalStyles/theme';

export const Layout = styled.main`
  position: 'static';
  background-color: ${defaultTheme.colors.baseWhiteFont};
  font-family: ${defaultTheme.typography.baseFontFamily};
  font-size: ${defaultTheme.typography.baseFontSize};
  line-height: ${defaultTheme.typography.baseLineHeight};
`;
