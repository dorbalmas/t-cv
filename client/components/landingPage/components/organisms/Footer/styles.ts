import { media } from '@/components/landingPage/globalStyles/media';
import { defaultTheme, styled } from '@/components/landingPage/globalStyles/theme';

export const Footer = styled.div`
  font-size: calc(1.6rem * 0.625);
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  ${media.sm`
  justify-content:center;
  gap:2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;

  `}
`;

export const BottomPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
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
