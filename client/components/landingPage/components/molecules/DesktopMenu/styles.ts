import { motion } from 'framer-motion';
import { css } from 'styled-components';

import { rotateMenu } from '@/components/landingPage/globalStyles/animations';
import { media } from '@/components/landingPage/globalStyles/media';
import { defaultTheme, styled } from '@/components/landingPage/globalStyles/theme';

// import { BlockLinkType, IData, IHover } from './types';
type IHover = {
  height: number;
  width: number;
  left: number;
};
// const colors = () => {
//   const base = defaultTheme.colors.baseDarkFont;
//   return {
//     light: base,
//     dark: defaultTheme.colors.white,
//   };
// };

// const hoverColors = () => ({
//   developers: defaultTheme.developers.colors.primary,
//   solutions: defaultTheme.magento.colors.link,
//   why: defaultTheme.why.colors.primary,
//   product: defaultTheme.link.color,
//   blog: defaultTheme.link.color,
// });

// const dropdownH6styles = () => `
//   display: block;
//   font-size: 1.5rem;
//   color: ${defaultTheme.colors.dark};
//   line-height: 2.1rem;
//   font-weight: ${defaultTheme.typography.semiLightFontWeight};
//   margin: 0;
//   will-change: color;
//   transition: color 0.2s ease;
// `;

// const dropdownText = () => `
//   display: block;
//   font-size: 1.3rem;
//   line-height: 1.8rem;
//   letter-spacing: 0.01rem;
//   color: ${defaultTheme.colors.baseLightFont};
//   font-weight: ${defaultTheme.typography.baseFontWeight};
// `;

// export const DropdownTitle = styled.h5`
//   font-size: 1.4rem;
//   letter-spacing: 0.02rem;
//   line-height: 3rem;
//   font-weight: ${defaultTheme.typography.baseFontWeight};
//   text-transform: uppercase;
//   color: ${defaultTheme.colors.baseLightFont};
//   margin: 0 0 1rem 0;
//   span {
//     display: block;
//     padding-bottom: 1rem;
//   }
// `;

// export const DropdownTitleWithIcon = styled.h5`
//   font-size: 1.5rem;
//   line-height: 2.1rem;
//   font-weight: ${defaultTheme.typography.semiLightFontWeight};
//   text-transform: uppercase;
//   color: ${defaultTheme.colors.baseLightFont};
//   margin: 1.2rem 0 1rem 0;
// `;

// export const MainContent = styled.div<{ dense?: boolean }>`
//   position: relative;
//   padding: ${(props) => (props.dense ? '2rem 3.5rem 3rem 3.5rem' : '2rem 4.5rem 3rem 4.5rem')};
//   border-radius: 0 0 0.9rem 0.9rem;
//   h5 {
//     margin-bottom: 1.4rem;
//   }
// `;

// export const BottomContent = styled.div<{ dense?: boolean }>`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #f9f9f9;
//   padding: ${(props) => (props.dense ? '0 3.5rem 0 3.5rem' : '0 4.5rem 0 4.5rem')};
//   border-radius: 0 0 0.9rem 0.9rem;
//   a,
//   button {
//     color: ${defaultTheme.colors.dark};
//     &:hover {
//       color: ${defaultTheme.link.color};
//       svg {
//         path {
//           stroke: ${defaultTheme.link.color};
//         }
//       }
//     }
//   }
// `;

// export const BlockLink = styled(Link)<{
//   type: BlockLinkType;
//   disabled?: boolean;
// }>`
//   ${(props) =>
//     props.disabled &&
//     css`
//       opacity: 0.5;
//       pointer-events: none;
//     `};
//   &:hover {
//     h6 {
//       color: ${defaultTheme.dropdown.platform};
//     }
//   }
// `;

// export const Block = styled.div<{
//   dense?: boolean;
//   indent?: boolean;
//   noPadding?: boolean;
// }>`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 1rem 5rem;
//   margin-top: 0;
//   padding-left: ${(props) => (props.indent ? 0 : 0)};
//   padding-bottom: ${(props) => (props.noPadding ? 0 : '1rem')};
//   & > a {
//     display: flex;
//     margin-bottom: ${(props) => (props.dense ? '0.5rem' : '1.2rem')};
//     font-size: 1.4rem;
//     max-width: 24rem;
//   }
//   svg {
//     margin-right: 2rem;
//     min-width: 6rem;
//   }
//   h6 {
//     letter-spacing: 0.02rem;
//   }
// `;

// export const DevelopersBlock = styled(Block)`
//   padding-bottom: 2rem;
//   a {
//     width: 110%;
//     letter-spacing: 0.01rem;
//   }
// `;

// export const ArticleBlock = styled.div`
//   font-weight: ${defaultTheme.typography.semiLightFontWeight};
//   p {
//     font-size: 1.5rem;
//   }
// `;

// export const ArticleImageContainer = styled.div`
//   width: 100%;
//   height: 17.3rem;
//   position: relative;
//   box-shadow: 0px 8px 24px -6px rgba(40, 35, 74, 0.3);
//   ${media.sm`
//     margin: 2rem 0;
//   `};
// `;

// export const ArticleImage = styled.img`
//   width: 100%;
//   height: 17.3rem;
// `;

// export const TopContent = styled.div<{ dense?: boolean }>`
//   background-color: rgba(239, 245, 248, 0.6);
//   padding: ${(props) => (props.dense ? '2.8rem 3.5rem 0.3rem 3.5rem' : '2.8rem 4.5rem 1rem 4.5rem')};
//   h6 {
//     font-size: 1.5rem;
//     ${(props) => dropdownH6styles(defaultTheme)}
//     letter-spacing: 0.02rem;
//     a {
//       font-weight: ${defaultTheme.typography.semiLightFontWeight};
//     }
//   }
//   p {
//     font-size: 1.4rem;
//     margin: 3rem 0 2rem 0;
//   }
//   li > div {
//     padding-bottom: 0.7rem;
//   }
//   ul a {
//     letter-spacing: 0.02rem;
//   }
//   ${Block} {
//     &:last-child {
//       padding-bottom: 0;
//       & > a {
//         margin-bottom: 0;
//       }
//     }
//   }
//   ${DevelopersBlock} {
//     &:last-child {
//       padding-bottom: 2.4rem;
//     }
//   }
// `;

// export const DevelopersTopContent = styled.div`
//   padding: 2.8rem 3.5rem 0.3rem 3.5rem;
//   h6 {
//     font-size: 1.5rem;
//     ${(props) => dropdownH6styles(props.theme)}
//     letter-spacing: 0.02rem;
//     a {
//       font-weight: ${defaultTheme.typography.semiLightFontWeight};
//     }
//   }
// `;

// export const BlockText = styled.span`
//   padding-top: 0.5rem;
//   ${(props) => dropdownText(props.theme)};
//   font-size: 1.2rem;
//   line-height: 1.4;
// `;

// export const TopText = styled.span`
//   ${(props) => dropdownText(props.theme)}
//   padding-bottom: 1.5rem;
// `;

export const Menu = styled.nav`
  position: relative;
  top: 0.6rem;
  display: flex;
  list-style: none;
  padding: 1rem 0 0 3rem;
  margin: 0;
  perspective: 2000px;
  ${media.md`
    padding:  1rem 0 0 0;
   
  `}
  ${media.lg`
    padding:  1rem 0 0 0;
  `}
  ${media.xlg`
    padding: 1rem 0 0 0;
  `}
  ul {
    font-size: 1.5rem;
    font-weight: ${defaultTheme.typography.semiLightFontWeight};
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    a {
      display: block;
      padding: 1rem 0 1rem 0;
      color: ${defaultTheme.colors.dark};
      font-weight: ${defaultTheme.typography.semiLightFontWeight};
    }
  }
`;

export const AnimatedBlock = styled.div<
  IHover & {
    initialAnimation: boolean;
    endAnimation: boolean;
  }
>`
  display: block;
  position: absolute;
  top: 4.5rem;
  transform-origin: left top;
  box-shadow: 0px 40px 160px rgba(40, 35, 74, 0.3);
  border-radius: 0.9rem;
  background-color: ${defaultTheme.colors.white};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: 0;
  will-change: transform, height, width;
  transform: ${(props) => `translateX(${props.left - props.width / 4}px)`};
  transition: ${(props) =>
    !props.initialAnimation &&
    !props.endAnimation &&
    'transform 0.2s ease-out, height 0.2s ease-out, width 0.2s ease-out'};
  ${(props) =>
    props.initialAnimation &&
    css`
      animation: ${rotateMenu(true, `translateX(${props.left - props.width / 4}px)`)} 0.3s ease forwards;
    `}
  ${(props) =>
    props.endAnimation &&
    css`
      animation: ${rotateMenu(false, `translateX(${props.left - props.width / 4}px)`)} 0.3s ease forwards;
    `}
`;

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
`;

// const mediumLinkStyles = (theme: DefaultTheme) => `
//   display: block;
//   padding: 0.5rem 0 0.5rem 0;
//   width: 100%;
//   font-size: 1.5rem;
//   font-weight: ${defaultTheme.typography.semiLightFontWeight};
//   letter-spacing: 0.02rem;
// `;

// export const MediumLinkGatsby = styled(Link)`
//   ${(props) => mediumLinkStyles(props.theme)}
// `;

// export const MediumLink = styled.a`
//   ${(props) => mediumLinkStyles(props.theme)}
// `;

// export const BlogLink = styled.a`
//   display: block;
//   padding: 0;
//   margin: 2rem 0 2rem 0;
//   width: 100%;
//   font-size: 1.5rem;
//   color: #28234a;
//   font-weight: ${defaultTheme.typography.baseFontWeight};
//   cursor: pointer;
// `;

// export const ArticleLink = styled.div`
//   a,
//   button {
//     padding: 0;
//     font-size: 1.3rem;
//     font-weight: ${defaultTheme.typography.semiFontWeight};
//     text-transform: uppercase;
//     width: 100%;
//     color: ${defaultTheme.link.color};
//     will-change: color;
//     transition: color 0.2s ease;
//     &:hover {
//       color: ${defaultTheme.link.color};
//     }
//     span {
//       padding: 0;
//     }
//     svg {
//       margin: 0;
//     }
//   }
// `;

export const Item = styled.div`
  font-size: 1.6rem;
  font-weight: ${defaultTheme.typography.semiLightFontWeight};
  will-change: opacity;
  transition: opacity 0.3s ease;
  &:hover {
  }
  button,
  a {
    color: ${defaultTheme.colors.baseDarkFont};
    margin: 0;
    padding: 0 1rem 2rem 1rem;
    display: block;
    line-height: 1.2;
    letter-spacing: 0.01rem;
    font-size: 1.5rem;
    font-weight: ${defaultTheme.typography.semiLightFontWeight};
    font-family: ${defaultTheme.typography.baseFontFamily};
    will-change: opacity;
    ${media.md`
      color: defaultTheme.colors.baseDarkFont;
	  font-size: calc(1.6rem * 0.625);
    `}
    ${media.lg`
      padding: 0 1.5rem 2rem 1.5rem;
    `}
  }
  /* a[isactive],
  a.active {
    color: ${defaultTheme.link.color};
  } */
`;
export const Decoration = styled.a`
  text-decoration: none;
  display: block;
  will-change: opacity;
  opacity: 1;
  transition: opacity 0.3s ease;
  ${media.sm`
	justify-content: space-between;
	&:hover {
    color: black;
    text-decoration: none;
	opacity: 0.5;

  }
  `}
`;

export const ItemLanguageSwitcher = styled.div`
  font-size: 1.6rem;
  font-weight: ${defaultTheme.typography.semiLightFontWeight};
  will-change: opacity;
  transition: opacity 0.3s ease;

  button,
  a {
    color: ${defaultTheme.colors.baseDarkFont};
    margin: 0;
    padding: 0 1rem 2rem 1rem;
    display: block;
    line-height: 1.2;
    letter-spacing: 0.01rem;
    font-size: 1.5rem;
    font-weight: ${defaultTheme.typography.semiLightFontWeight};
    font-family: ${defaultTheme.typography.baseFontFamily};
    will-change: opacity;
    ${media.md`
    &:hover {
      background-color: white;
      color: #0084c7;
      opacity: 0.6;
    }
      color: defaultTheme.colors.baseDarkFont;
	  font-size: calc(1.6rem * 0.625);
    `}
    ${media.lg`
      padding: 0 1.5rem 2rem 1.5rem;
    `}
  }
`;

export const ArrowLink = styled.div`
  padding-bottom: 0.25rem;
  padding-left: 5rem;
  a {
    align-items: flex-start;
  }
  span {
    max-width: 25rem;
  }
  svg {
    max-width: 1.1rem;
    min-width: 1.1rem;
    margin-top: 0.3rem;
  }
`;

export const AnimatedBlockContent = styled(motion.div)<IHover & { variant: 'lg' | 'md' | 'sm' }>`
  transform-origin: top left;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  min-width: ${(props) => (props.variant === 'lg' ? '68rem' : props.variant === 'md' ? '44rem' : '41rem')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a,
  button {
    color: ${defaultTheme.colors.dark};
    will-change: color;
    transition: color 0.2s ease;
    &:hover {
      color: ${defaultTheme.link.color};
    }
  }
  ${ArrowLink} {
    a,
    button {
      &:hover {
        svg {
          path {
            stroke: ${defaultTheme.link.color};
          }
        }
      }
    }
  }
`;

// export const New = styled.em`
//   display: inline-block;
//   margin-left: 1.3rem;
//   color: ${defaultTheme.colors.white};
//   padding: 0 0.3rem;
//   font-size: 1.2rem;
//   font-style: normal;
//   line-height: 1.1;
//   background-color: #ed7b69;
// `;

// export const Indent = styled.div`
//   padding-left: 5rem;
// `;
