import { defaultTheme, styled } from '@/components/landingPage/globalStyles/theme';

// import { StyledButtonLink } from '../../atoms/ButtonLink';

// const colors = (theme: DefaultTheme) => ({
//   light: defaultTheme.colors.baseDarkFont,
//   dark: defaultTheme.colors.white,
// });

export const MobileMenu = styled.div``;

export const MenuContainer = styled.div`
  position: relative;
  padding: 1rem;
  overflow: auto;
`;

export const Menu = styled.nav<{ open: boolean }>`
  font-weight: ${defaultTheme.typography.semiLightFontWeight};
  width: 100%;
  will-change: opacity;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 0.15s ease;
  transition-delay: ${(props) => (props.open ? '0.4s' : '0s')};
  & > div {
    &:nth-last-child(2) {
      margin-top: 2rem;
    }
  }
`;

export const Hamburger = styled.button<{
  isFixed: boolean;
  open: boolean;
}>`
  position: fixed;
  top: 1.8rem;
  right: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: calc(5rem * 0.652);
  height: calc(5rem * 0.652);
  border: ${(props) => (props.isFixed || props.open ? `1px solid ${defaultTheme.colors.baseDarkFont}` : 'none')};
  border-radius: 50%;
  background: ${(props) => (props.isFixed ? defaultTheme.colors.baseWhiteFont : 'transparent')};
  z-index: 100;
  svg {
    max-width: 2.5rem;
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: calc(1.7rem * 0.652);
    height: calc(0.3rem * 0.652);
    background-color: ${defaultTheme.colors.baseDarkFont};
    left: 50%;
    will-change: transform;
    transition: transform 0.3s ease;
  }
  &:before {
    transform: ${(props) => (props.open ? 'translateX(-50%) rotate(45deg)' : 'translateX(-50%) translateY(-0.5rem)')};
  }
  &:after {
    transform: ${(props) => (props.open ? 'translateX(-50%)  rotate(-45deg)' : 'translateX(-50%) translateY(0.5rem)')};
  }
`;

export const MotionMenu = styled.div<{ open: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  min-width: 320px;
  min-height: 101vh;
  min-height: -webkit-fill-available;
  max-height: 101vh;
  padding: 7rem 0 8rem 0;
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  will-change: transform;
  transform: ${(props) => (props.open ? 'translate(0, 0)' : 'translate(100%, -100%)')};
  transition: transform 0s ease;
  transition-delay: ${(props) => (props.open ? '0s' : '0.6s')};
  &:before {
    content: '';
    display: block;
    position: absolute;
    right: 1.7rem;
    top: 1.8rem;
    height: calc(5rem * 0.625);
    width: calc(5rem * 0.625);
    border-radius: 50%;
    background-color: ${defaultTheme.colors.baseWhiteFont};
    transform-origin: center;
    transition: transform 0.5s ease;
    transform: ${(props) => (props.open ? 'scale(55, 55)' : 'scale(1, 1)')};
  }
`;

// export const ContactField = styled.div<{ open?: boolean }>`
//   display: flex;
//   min-height: 10rem;
//   width: 100%;
//   align-items: center;
//   opacity: ${(props) => (props.open ? 1 : 0)};
//   transition: opacity 0.2s ease;
//   transition-delay: ${(props) => (props.open ? '0.6s' : '0s')};
//   ${StyledButtonLink} {
//     min-width: 100%;
//     min-height: 5.6rem;
//     font-size: 1.8rem;
//     font-weight: ${(props) => props.defaultTheme.typography.semiLightFontWeight};
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;

export const Logo = styled.div<{ open: boolean }>`
  position: absolute;
  top: 2rem;
  padding-left: 3rem;
  will-change: opacity;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 0.2s ease;
  transition-delay: ${(props) => (props.open ? '0.4s' : '0s')};
`;

export const MenuItem = styled.div<{
  index: number;
  isOpenMenu: boolean;
  //   active: boolean;
}>`
  text-align: center;
  font-size: x-large;
  color: black;
  padding-bottom: 3.6rem;
  cursor: pointer;
  letter-spacing: 0.01rem;
  will-change: opacity, transform;
  opacity: ${(props) => (props.isOpenMenu ? 1 : 0)};
  transform: ${(props) => (props.isOpenMenu ? 'translateY(0)' : 'translateY(1rem)')};
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: ${(props) => (props.isOpenMenu ? 400 + props.index * 70 : 0)}ms;
`;

export const LoginButton = styled.button`
  opacity: 1;
  color: #ea3a60;
  transition: opacity 0.3s ease;
  letter-spacing: 0.15rem;
`;

export const GoToActionButton = styled.button`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border: solid 2px rgba(223, 78, 117, 0.08);
  border-radius: 10rem;
  color: #ea3a60;
  opacity: 1;
  /* text-transform: uppercase; */
  font-size: x-large;
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
