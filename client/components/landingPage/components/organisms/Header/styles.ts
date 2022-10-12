import { css, keyframes } from 'styled-components';

import { media } from '@/components/landingPage/globalStyles/media';
import { defaultTheme, styled } from '@/components/landingPage/globalStyles/theme';

type Header = 'fixed' | 'normal';

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const SignIn = styled.a`
  font-size: calc(1.6rem * 0.652);
  padding-right: 3.6rem;
  text-decoration: none;
  display: block;
  opacity: 0.6;
  will-change: opacity;
  transition: opacity 0.3s ease;
  ${media.sm`
	justify-content: space-between;
  `}
  &:hover {
    color: ${defaultTheme.colors.dark};
    opacity: 1;
    text-decoration: none;
  }
`;

export const SignUp = styled.a`
  font-size: calc(1.6rem * 0.652);
  color: ${defaultTheme.colors.blue};
  text-decoration: none;
  display: block;
  opacity: 0.6;
  will-change: opacity;
  transition: opacity 0.3s ease;
  ${media.sm`
	justify-content: space-between;
  `}
  &:hover {
    color: ${defaultTheme.colors.blue};
    opacity: 1;
    text-decoration: none;
  }
`;

export const Header = styled.header<{
  type: Header;
  show?: boolean;
  isMobile: boolean;
}>`
  position: ${(props) => (props.type === 'fixed' && !props.isMobile ? 'fixed' : 'absolute')};
  width: 100%;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  max-width: 100%;
  animation: ${(props) => {
    if (props.type === 'fixed' && !props.isMobile) {
      return props.show
        ? css`
            ${slideIn} 0.3s ease forwards
          `
        : css`
            ${slideUp} 0.5s ease forwards
          `;
    }
  }};
  background-color: ${(props) =>
    props.type === 'fixed' && !props.isMobile ? defaultTheme.header.background : 'transparent'};
`;

export const Logo = styled.div`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

export const RightPart = styled.div`
  display: flex;
  padding-top: 0;
  align-items: center;
  width: 200px;

  a,
  button {
    font-weight: ${defaultTheme.typography.semiLightFontWeight};
    letter-spacing: 0.01rem;
  }

  div a,
  & > a:not(${SignUp}) {
    padding-right: 1.8rem;
  }
  ${SignIn} {
    padding-right: 2rem;
    ${media.lg`
       padding-right: 4rem;
    `};
  }

  a {
    will-change: opacity, color;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
      text-decoration: none;
    }
  }

  a:not(${SignUp}) {
    color: ${defaultTheme.colors.baseDarkFont};
  }
`;

export const MobileRightPart = styled.div`
  height: 3.1rem;
  padding-right: 3.5rem;
  padding-top: 0;
  ${media.sm`
    padding-right: 5rem;
  `};
`;
