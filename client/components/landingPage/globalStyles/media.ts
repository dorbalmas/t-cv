import { css, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';

import { lgScreen, mdScreen, smScreen, smScreenMin, xlgScreen, xsScreen, xxlgScreen } from './constants';
import { DefaultTheme } from './theme';

type Theme = (props: ThemeProps<DefaultTheme> | any) => string | FlattenSimpleInterpolation | number;

const breakpoints = {
  lg: lgScreen, // 75 / 1200
  lgMin: 75,
  md: mdScreen, // 62 / 992
  xs: xsScreen, // 25 / 400
  sm: smScreen, // 48 / 768
  smMin: smScreenMin, // 47.938 / 767
  xlg: xlgScreen,
  xxlg: xxlgScreen,
};

type Breakpoints = keyof typeof breakpoints;
type Media = Record<Breakpoints, (l: TemplateStringsArray, ...props: Theme[]) => string | FlattenSimpleInterpolation>;
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label as Breakpoints] = (literals: TemplateStringsArray, ...placeholders: Theme[]) =>
    css`
      @media (min-width: ${breakpoints[label as Breakpoints]}em) {
        ${css(literals, ...placeholders)}
      }
    ` as any;

  return acc;
}, {} as Media);
