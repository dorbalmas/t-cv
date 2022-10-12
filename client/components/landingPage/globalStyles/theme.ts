import baseStyled from 'styled-components';

import * as C from './constants';

export const breakpoints = {
  lg: C.lgScreen,
  lgMin: 75,
  md: C.mdScreen,
  sm: C.smScreen,
  smMin: C.smScreenMin, // 47.938 / 767
  xlg: C.xlgScreen,
  xxlg: C.xxlgScreen,
};

export const gutter = 24;
export const columns = 12;

const buttonProps = (color: string) => ({
  fontSize: C.btnFontSize,
  fontWeight: 400,
  background: 'transparent',
  border: color,
  borderSize: C.baseBorderSize,
  borderRadius: 0,
  color: color,
  hoverBackground: color,
  hoverColor: 'transparent',
});

export const defaultTheme = {
  button: {
    filled: {
      ...buttonProps(C.theme.baseDarkFont),
      background: C.theme.baseDarkFont,
      border: C.theme.baseDarkFont,
      borderSize: C.baseBorderSize,
      borderRadius: 0,
      color: C.theme.white,
      fontSize: C.btnFontSize,
      hoverBackground: C.theme.hoverBtnColor,
      hoverColor: C.theme.white,
    },
    filledSecondary: {
      ...buttonProps(C.theme.baseDarkFont),
      background: C.theme.blue,
      border: C.theme.blue,
      borderSize: C.baseBorderSize,
      borderRadius: 0,
      color: C.theme.white,
      fontSize: C.btnFontSize,
      hoverBackground: C.theme.blue,
      hoverColor: C.theme.white,
    },
    outlined: {
      ...buttonProps(C.theme.baseDarkFont),
      hoverColor: C.theme.white,
      fontWeight: 600,
      borderSize: '2px',
      borderRadius: '4px',
    },
    outlinedOpenSource: {
      ...buttonProps(C.turquoise),
      hoverColor: C.theme.white,
    },
    outlinedWhite: {
      ...buttonProps(C.theme.white),
      hoverColor: C.theme.dark,
    },
    outlinedYellow: {
      ...buttonProps(C.yellow),
      hoverColor: C.theme.baseDarkFont,
    },
    outlinedGreen: {
      ...buttonProps(C.green),
      hoverColor: C.theme.baseDarkFont,
    },
    outlinedCaseBlue: {
      ...buttonProps(C.warmBlue),
      hoverColor: C.theme.white,
    },
    outlinedPatch: {
      ...buttonProps(C.patchGreen),
      hoverColor: C.theme.white,
    },
    outlinedAdam: {
      ...buttonProps(C.adamOrange),
      hoverColor: C.theme.white,
    },
    outlinedPricing: {
      ...buttonProps(C.theme.baseDarkFont),
      hoverColor: C.theme.white,
      borderSize: '2px',
      borderRadius: '4px',
      fontSize: '1.6rem',
    },
    outlinedPricingSecondary: {
      ...buttonProps(C.theme.baseDarkFont),
      color: C.theme.white,
      hoverColor: C.theme.baseDarkFont,
      hoverBackground: C.theme.white,
      border: C.theme.white,
      borderSize: '2px',
      borderRadius: '4px',
      fontSize: '1.6rem',
    },
    outlinedPricingPro: {
      ...buttonProps(C.theme.blue),
      background: C.theme.blue,
      color: C.theme.white,
      hoverColor: C.theme.blue,
      hoverBackground: C.theme.white,
      border: C.theme.blue,
      borderSize: '2px',
      borderRadius: '4px',
      fontSize: '1.6rem',
    },
    outlinedPricingStandard: {
      ...buttonProps(C.theme.baseDarkFont),
      background: C.theme.baseDarkFont,
      color: C.theme.white,
      hoverColor: C.theme.baseDarkFont,
      hoverBackground: C.theme.white,
      border: C.theme.baseDarkFont,
      borderSize: '2px',
      borderRadius: '4px',
      fontSize: '1.6rem',
    },
    outlinedPricingEnterprise: {
      ...buttonProps(C.theme.enterpriseRed),
      background: C.theme.enterpriseRed,
      color: C.theme.white,
      hoverColor: C.theme.enterpriseRed,
      hoverBackground: C.theme.white,
      border: C.theme.enterpriseRed,
      borderSize: '2px',
      borderRadius: '4px',
      fontSize: '1.6rem',
      div: {
        width: '100px',
      },
    },
    text: {
      ...buttonProps(C.theme.baseDarkFont),
      hoverColor: C.theme.baseDarkFont,
      color: C.theme.baseDarkFont,
      hoverBackground: 'transparent',
      borderSize: '0px',
    },
  },
  header: {
    background: C.theme.white,
  },
  link: {
    color: C.linkColor,
  },
  api: {
    colors: {
      primary: C.pink,
      primaryMedium: C.pinkMedium,
      primaryLight: C.pinkLight,
    },
  },
  pwa: {
    colors: {
      primary: C.brightGreen,
      primaryDarker: C.brightGreen1,
      primaryLight: C.lightGreen,
    },
  },
  colors: {
    ...C.theme,
  },
  container: {
    width: C.containerWidth,
    sm: C.containerSmWidth,
    xs: C.containerXsWidth,
    lg: C.lgContainer,
    md: C.mdContainer,
  },
  dropdown: {
    platform: {
      cloud: C.paleCyan1,
      openSource: C.baseFontColor,
      coreFunctionalities: C.orangeMars,
      pwa: C.greenDarker,
      merchandising: C.merchandisingYellow1,
      api: C.pinkMedium,
      internationalization: C.warmBlue,
      launch: C.launchBlue,
      success: C.paleCyan,
      migrating: C.magentoOrange,
    },
  },
  openSource: {
    colors: {
      main: C.openSourceYellow,
      mainDarker: C.turquoise1,
      primary: C.yellow,
      secondary: C.aqua,
      tertiary: C.green,
      quatenary: C.pink2,
      background: C.blueberry,
    },
  },
  openSourceIcon: {
    color: C.theme.openSourceIcon,
  },
  magento: {
    colors: {
      primary: C.salmon,
      primaryLighter: C.salmonLighter,
      primaryDarker: C.salmonDarker,
      primaryDarker1: C.salmonDarker1,
      link: C.linkColor,
    },
  },
  developers: {
    colors: {
      primary: C.pink,
    },
  },
  why: {
    colors: {
      primary: C.warmGreen,
    },
  },
  merchandising: {
    colors: {
      primary: C.merchandisingYellow,
      primaryMedium: C.merchandisingYellowMedium,
      primaryLight: C.merchandisingYellowLight,
    },
  },
  pricing: {
    colors: {
      primary: C.theme.white,
    },
  },
  about: {
    colors: {
      highligh: C.theme.highlightYellow,
    },
  },
  input: {
    labelFontSize: C.labelFontSize,
    activeColor: C.linkColor,
    errorColor: C.theme.error,
    background: C.theme.inputBackground,
  },
  footer: {
    background: C.white,
  },
  section: {
    spacing: {
      lg: {
        horizontal: '8rem',
        vertical: '7rem',
      },
      md: {
        horizontal: '4rem',
        vertical: '5rem',
      },
      sm: {
        horizontal: '3rem',
        vertical: '5rem',
      },
    },
  },
  text: {
    color: C.theme.baseDarkFont,
  },
  spacing: {
    gutter: '3rem',
    section: '100px 60px',
    sectionSm: '80px 30px',
    spacer: `${C.spacer}rem`,
  },
  typography: {
    baseFontFamily: C.baseFontFamily,
    monospaceFontFamily: C.monospaceFontFamily,
    baseFontSize: C.baseFontSize,
    baseLineHeight: C.baseLineHeight,
    boldFontWeight: C.boldFontWeight,
    h1FontSize: C.h1FontSize,
    h1LineHeight: C.h1LineHeight,
    h2FontSize: C.h2FontSize,
    h2LineHeight: C.h2LineHeight,
    h3FontSize: C.h3FontSize,
    h3LineHeight: C.h3LineHeight,
    h5FontSize: C.h5FontSize,
    h5LineHeight: C.h5LineHeight,
    h6FontSize: C.h6FontSize,
    h6LineHeight: C.h6LineHeight,
    baseFontWeight: C.baseFontWeight,
    lightFontWeight: C.lightFontWeight,
    semiFontWeight: C.semiFontWeight,
    semiLightFontWeight: C.semiLightFontWeight,
    ...C.typography,
  },
  flexboxgrid: {
    gridSize: columns, // columns
    gutterWidth: 2.4, // rem
    outerMargin: 3, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 76.7, // rem
      md: 99.2, // rem
      lg: 131.6, //144, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: breakpoints.sm, // em
      md: breakpoints.md, // em
      lg: breakpoints.lg, // em
    },
  },
};

export const lightTheme = { ...defaultTheme };

export const darkTheme = {
  ...defaultTheme,
  button: {
    ...defaultTheme.button,
    outlined: {
      background: 'transparent',
      border: C.theme.white,
      borderSize: '2px',
      color: C.theme.white,
      fontSize: C.btnFontSize,
      hoverBackground: C.theme.white,
      hoverColor: C.theme.baseDarkFont,
    },
    text: {
      color: C.theme.white,
      hoverColor: C.theme.white,
      borderSize: '0px',
    },
  },
  openSourceIcon: {
    color: 'transparent',
  },
  header: {
    ...defaultTheme.header,
    background: '#000',
  },
  colors: {
    ...defaultTheme.colors,
    baseDarkFont: C.theme.white,
    baseWhiteFont: C.theme.dark,
    cookieLink: C.theme.white,
  },
  input: {
    ...defaultTheme.input,
    background: '#000',
  },
  footer: {
    ...defaultTheme.footer,
    background: '#000',
  },
};

export type DefaultTheme = typeof defaultTheme;
export type LightTheme = typeof lightTheme;
export type DarkTheme = typeof darkTheme;
export const styled = baseStyled;
