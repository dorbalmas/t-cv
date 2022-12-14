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
  opacity: 1;
  color: #ea3a60;
  will-change: opacity;
  transition: opacity 0.3s ease;
  ${media.sm`
	justify-content: space-between;
  `}
  &:hover {
    color: ${defaultTheme.colors.dark};
    opacity: 0.6;
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
export const LoginButton = styled.button`
  opacity: 1;
  color: #ea3a60;
  transition: opacity 0.3s ease;
  :hover {
    opacity: 0.6;
  }
`;

export const GoToActionButton = styled.button`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border: solid 2px rgba(223, 78, 117, 0.08);
  border-radius: 10rem;
  color: #ea3a60;
  opacity: 1;
  /* text-transform: uppercase; */
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10rem;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(223, 78, 117, 0.08);
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }
  &:hover {
    &:before {
      width: 100%;
    }
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
  top: 1.1rem;
  left: 0.2rem;
  width: 120px;
  ${media.sm`
  	top: 0;
  	left: 0;
	width: 160px;
  `};
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
  width: 300px;
`;

export const RightPart = styled.div`
  display: flex;
  padding-top: 0;
  justify-content: end;
  align-items: center;
  width: 300px;

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
