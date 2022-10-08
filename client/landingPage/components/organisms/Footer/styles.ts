import { media } from 'landingPage/globalStyles/media';
import { defaultTheme, styled } from 'landingPage/globalStyles/theme';

export const Footer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  width: 100%;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  ${media.sm`
  justify-content:center;
  gap:2rem;
  `}
`;
export const BottomPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  ${media.sm`
    border: none;
  `}
`;
export const Decoration = styled.a`
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
