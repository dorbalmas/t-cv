import { media } from '@/components/landingPage/globalStyles/media';
import { styled } from '@/components/landingPage/globalStyles/theme';

export const FluidContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  max-width: 100%;
  ${media.lg`
    max-width: 131.6rem;
  `}
`;
