import { media } from 'landingPage/globalStyles/media';
import { styled } from 'landingPage/globalStyles/theme';
import { Grid } from 'react-styled-flexboxgrid';

export const FluidContainer = styled(Grid)`
  max-width: 100%;
  ${media.lg`
    max-width: 131.6rem;
  `}
`;
