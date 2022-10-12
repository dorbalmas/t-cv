import { motion } from 'framer-motion';

import { FluidContainer } from '@/components/landingPage/components/style/FluidContainer/FluidContainer';
import { media } from '@/components/landingPage/globalStyles/media';
import { defaultTheme, styled } from '@/components/landingPage/globalStyles/theme';

export const Container = styled.div`
  position: relative;
  background-color: ${defaultTheme.colors.white};
  overflow: hidden;
  min-height: 100vh;
  blockquote {
    br {
      display: none;
      ${media.lg`
        display: block;
      `};
    }
  }
`;

export const FirstSection = styled(FluidContainer)`
  min-height: 100vh;
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

export const MainHero = styled(motion.div)`
  position: absolute;
  width: 800px;
`;

export const DashboardContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FullscreenHeight = styled.div`
  height: 100vh;
`;

export const SubtitleContainer = styled.div`
  max-width: 40rem;
  ${media.sm`
    max-width: 80%;
  `};
  ${media.md`
     max-width: 40rem;
  `};
`;

// export const SectionTitle = styled.div`
//   padding-top: 2rem;
//   padding-bottom: 4rem;
//   ${media.sm`
//     max-width: 77%;
//   `}
//   ${media.md`
//     padding-top: 0;
//     padding-bottom: 0;
//     max-width: 50rem;
//   `}
//   h2 {
//     font-size: 3.6rem;
//     margin-top: 2rem;
//     line-height: 1.2;
//     ${media.sm`
//       font-size: 4.3rem;
//     `}
//   }
// `;

// export const ImageContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   padding-top: 0;
//   ${media.md`
//     min-height: 100vh;
//     padding-top : 11rem;
//   `}
// `;

// export const RightColumn = styled(motion.div)`
//   position: relative;
//   z-index: 2;
//   padding-top: 5rem;
//   overflow: visible;
//   ${media.md`
//     display: flex;
//     align-items: center;
//     will-change: transform;
//   `}
// `;

// export const RightColumnInner = styled.div`
//   height: 100%;
//   overflow: visible;
//   ${media.md`
//     min-height: 125rem;
//   `};
// `;

// export const StickyImage = styled.div`
//   z-index: 2;
//   background-color: ${defaultTheme.colors.hero};
//   max-width: 50rem;
//   margin: 0 auto;
// `;

// export const BottomSection = styled.div`
//   max-width: 106rem;
//   margin: 0 auto;
//   padding-bottom: 8rem;
//   ${media.md`
//      padding-bottom: 15rem;
//   `}
// `;

// export const ServiceOriented = styled.div`
//   ${media.md`
//     padding-bottom: 10rem;
//   `}
// `;
