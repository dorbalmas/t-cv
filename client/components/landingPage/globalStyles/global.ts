import { createGlobalStyle } from 'styled-components';

import { media } from './media';
import { DefaultTheme, defaultTheme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  /* @import url('https://use.typekit.net/itf4hxr.css'); */
  

  /* *, *:before, *:after {
    box-sizing: inherit;
  } */

  /* * {  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  } */

  /* html {
    box-sizing: border-box;
    font-size: 62.5%;
     -webkit-text-size-adjust: 100%;
	 scroll-behavior: smooth;
  } */

  /* .fixed {
    position: fixed;
    height: 100%;
    overflow: hidden;
  } */

  /* body {
    font-family: ${defaultTheme.typography.baseFontFamily};
    font-size: ${defaultTheme.typography.baseFontSize};
    line-height: ${defaultTheme.typography.baseLineHeight};
    color: ${defaultTheme.colors.baseDarkFont};
    min-width: 320px;
    max-width: 100%;
    margin: 0 auto;
    background-color: ${defaultTheme.colors.baseWhiteFont};
  } */

  /* body.main, body.core {
    overflow-x: hidden;
  } */

  /* #portal {
    top: 0;
    left: 0;
    z-index: 10;
    &.open {
      position: fixed;
      width: 100%;
      height: 100%;
    }
  } */

  img {
    max-width: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${defaultTheme.colors.baseDarkFont};
  }
  h1 {
    font-size: 4.8rem;
    line-height: ${defaultTheme.typography.h1LineHeight};
    ${media.sm`
      font-size: 5.2rem;
    `};
    ${media.md`
       font-size: 6.2rem;
    `};
  }

  h2 {
    font-size: 4rem;
    line-height: ${defaultTheme.typography.h2LineHeight};
    ${media.md`
       font-size: 4rem;
    `};
  }

  h3 {
    font-size: ${defaultTheme.typography.h3FontSize};
    line-height: ${defaultTheme.typography.h3LineHeight};
  }

  h5 {
    font-size: ${defaultTheme.typography.h5FontSize};
    line-height: ${defaultTheme.typography.h5LineHeight};
  }

  h6 {
    font-size: ${defaultTheme.typography.h6FontSize};
    line-height: ${defaultTheme.typography.h6LineHeight};
  }

  a {
    text-decoration: none;
    font-weight: normal;
    color: inherit;
  }

  button {
    font-family: ${defaultTheme.typography.baseFontFamily};
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 0;
  }


  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    box-shadow: 0 0 0 4rem ${defaultTheme.input.background} inset !important;
  }

  .video {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 52.5%;
    overflow: hidden;
    iframe {
      position: absolute;
      width: 102%;
      height: 102%;
      left: 50%; 
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
