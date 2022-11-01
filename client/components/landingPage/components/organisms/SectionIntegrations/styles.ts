import { motion } from 'framer-motion';

import { FluidContainer } from '@/components/landingPage/components/style/FluidContainer/FluidContainer';
import { media } from '@/components/landingPage/globalStyles/media';
import { defaultTheme, styled } from '@/components/landingPage/globalStyles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-bottom: 30px;
  ${media.md`
    min-height: 100vh;
  `};
`;

export const Title = styled.h1`
  line-height: 1.2;
  font-weight: ${defaultTheme.typography.lightFontWeight};
  font-size: calc(4.2rem * 0.652);
  margin: 2rem 0;
  text-align: left;
  ${media.sm`
	font-size: calc( 5.7rem * 0.652);

    line-height: 1.1;
  text-align: center;

  `};
  ${media.md`
    max-width: 100%;
  `};
  b {
    font-weight: ${defaultTheme.typography.semiFontWeight};
  }
`;

export const Text = styled.p`
  font-size: calc(1.5rem * 0.652);
  line-height: 1.7;
  font-weight: ${defaultTheme.typography.baseFontWeight};
  color: ${defaultTheme.colors.baseDarkFont};
  text-align: left;
  margin-top: 0;
  ${media.sm`
    text-align: center;
	font-size: calc(1.7rem * 0.652);
  `};
`;

export const MobileHero = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  max-width: 800px;
`;

export const Car = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: -15px;
`;

export const Containers = styled(motion.div)`
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const Voice = styled(motion.div)`
  position: absolute;
  right: 20px;
  bottom: -80px;
`;

export const LogoBlockContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  max-width: 300px;
`;

export const LogoBlock = styled.div`
  width: 50%;
`;
export const DesktopContainer = styled.div`
  ${media.lg`
	::before {
		content: '';
		background: white;
		transform: skew(-60deg, -10deg);
		height: 100%;
		width: 100vw;
		position: absolute;
	}
  `};
`;

export const PaddedContainer = styled(FluidContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.sm`
    align-items: center;
  `};

  ${media.lg`
	::before {
	  content: '';
	  background: white;
	  transform: skew(60deg, 10deg);
      height: 100%;
	  width: 100vw;
	  position: absolute;
	}
  `};
`;

export const OrbWrapper = styled.div`
  position: relative;
  width: 1300px;
  min-width: 1300px;
  height: 1100px;
  padding-top: 140px;
  padding-bottom: 50px;
`;

export const Orb0 = styled(motion.img)`
  position: absolute;
  top: 150px;
  right: 180px;
  width: 520px;
  height: 520px;
`;

export const Orb90 = styled(motion.img)`
  position: absolute;
  top: 50%;
  right: 270px;
  width: 440px;
  height: 440px;
`;

export const Orb270 = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  width: 645px;
  height: 645px;
`;

export const VortexContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const VoiceElement = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 35%;
`;

export const CarElement = styled(motion.div)`
  position: absolute;
  top: 100px;
  left: 220px;
`;

export const AlgoliaElement = styled(motion.div)`
  position: absolute;
  top: 40px;
  right: 350px;
  width: 198px;
`;

export const ApplePayElement = styled(motion.div)`
  position: absolute;
  right: 180px;
  top: 50%;
  width: 141px;

  > * {
    transform: translateY(-50%);
  }
`;

export const ContainersElement = styled(motion.div)`
  position: absolute;
  left: 280px;
  bottom: 100px;
`;

export const SocialElement = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 120px;
  width: 139px;

  > div {
    transform: translateY(-50%);
  }
`;

export const LogoElement = styled(motion.div)`
  position: absolute;

  svg {
    width: 132px;
    height: 70px;
  }
`;

export const TextElement = styled(motion.span)`
  font-size: calc(1.4rem * 0.652);
  position: absolute;
  color: green;
  font-weight: ${defaultTheme.typography.boldFontWeight};
`;

export const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 470px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: calc(50% - 152px);
  background-color: black;
  transform: translateX(-50%) scaleY(0);
  transform-origin: top center;
`;

export const SLetter = styled.span`
  position: relative;
`;

// export const SaleorIcon = styled.img<{ width: number }>`
//   position: absolute;
//   left: 50%;
//   top: 0;
//   transform: translateX(-35%);
//   width: ${({ width }) => width}px;
//   max-width: ${({ width }) => width}px;
// `;
