// import Algolia from 'images/integrations/algolia-logo.svg';
// // brand logos
// import Avalara from 'images/integrations/avalara-logo.svg';
// // vortex elements
// import Containers from 'images/integrations/b2b.svg';
// import Car from 'images/integrations/car.svg';
// import Contentful from 'images/integrations/contentful-logo.svg';
// import Klaviyo from 'images/integrations/klaviyo-logo.svg';
// import Nextjs from 'images/integrations/nextjs-logo.svg';
// // orbs
// import Orb0 from '@/components/landingPage/assets/logo.svg';
// import Orb90 from '@/components/landingPage/assets/logo.svg';
// import Orb270 from '@/components/landingPage/assets/logo.svg';
import { AnimationControls, MotionValue, useAnimation, useTransform } from 'framer-motion';
import Img from 'next/image';
import React from 'react';

import ssss from '@/components/landingPage/assets/logo.svg';
// brand logos
// elements
import Containers from '@/components/landingPage/assets/logo.svg';
import pdf from '@/components/landingPage/assets/pdf.jpg';
import ThinkupDesktop from '@/components/landingPage/assets/ThinkupDesktop.gif';
import { createThresholdArray } from '@/components/landingPage/core/utils';

import { AnimationKeys, animationMap, variants } from './desktopAnimationConfig';
import * as S from './styles';
// import { useSectionImages } from './useSectionImages';

export const Desktop: React.FC<{ scrollProgress: MotionValue }> = ({ scrollProgress }) => {
  //   const images = useSectionImages();
  const sectionRef = React.useRef<HTMLDivElement>(null);

  // element step animations
  const step1Controls = useAnimation();
  const step2Controls = useAnimation();
  const step3Controls = useAnimation();
  const step4Controls = useAnimation();

  // line
  const lineOpacity = useTransform(scrollProgress, [0.5, 0.7], [0, 1]);
  const lineScaleY = useTransform(scrollProgress, [0.5, 1], [0.1, 1]);

  React.useEffect(() => {
    if (sectionRef.current instanceof Element) {
      let lastTriggerPosition: number | undefined;
      const animationActiveMap: Record<AnimationKeys, boolean> = {
        1: false,
        2: false,
        3: false,
        4: false,
      };
      const observer = new IntersectionObserver(
        ([{ boundingClientRect }]) => {
          const { height, y } = boundingClientRect;
          const progress = y / height;
          const down = lastTriggerPosition !== undefined ? lastTriggerPosition > y : true;
          lastTriggerPosition = y;

          const readyAnimation = (animationStep: AnimationKeys, controls: AnimationControls) => {
            const { breakpoint } = animationMap[animationStep];
            const animationActive = animationActiveMap[animationStep];

            if (progress < breakpoint && down && !animationActive) {
              controls.start('visible');
              animationActiveMap[animationStep] = true;
            } else if (progress > breakpoint && !down && animationActive) {
              controls.start('hidden');
              animationActiveMap[animationStep] = false;
            }
          };

          // ready up animation
          readyAnimation(1, step1Controls);
          readyAnimation(2, step2Controls);
          readyAnimation(3, step3Controls);
          readyAnimation(4, step4Controls);
        },
        {
          threshold: createThresholdArray(0, 1, 0.05),
        }
      );

      observer.observe(sectionRef.current);

      return () => observer.disconnect();
    }
  }, [step1Controls, step2Controls, step3Controls, step4Controls]);

  return (
    <S.DesktopContainer ref={sectionRef}>
      <S.PaddedContainer>
        <S.OrbWrapper>
          {/* <S.Orb0 src={Orb0} variants={variants.opacity} initial="hidden" animate={step4Controls} />
          <S.Orb90 src={Orb90} variants={variants.opacity} initial="hidden" animate={step4Controls} />
          <S.Orb270 src={Orb270} variants={variants.opacity} initial="hidden" animate={step4Controls} /> */}
          <S.Line
            style={{
              scaleY: lineScaleY,
              opacity: lineOpacity,
            }}
          />
          <S.VortexContainer>
            <S.CenterText>
              <S.Title>
                <b>
                  Headles
                  <S.SLetter>s{/* <S.SaleorIcon width={60} src={SaleorIcon} /> */}</S.SLetter> Commerce
                </b>
              </S.Title>
              <S.Text>
                Truly omni-channel with finely-crafted,
                <br />
                extremely flexible and complete commerce API.
                <br />
                Use your favorite CMS, CRM, fulfilment API,
                <br />
                PIM, POS, ERP or innovations of
                <br />
                tomorrow.
              </S.Text>
            </S.CenterText>
            <S.VoiceElement variants={variants.voice} initial="hidden" animate={step1Controls}>
              {/* <SVG src={Orb0} /> */}
              <Img src={ssss} />
              <S.TextElement
                inherit={false} // FIXME: this is fixed in version 2.7.4, remove when dependency is updated
                variants={variants.opacity}
                initial="hidden"
                animate={step4Controls}
                style={{ bottom: -30, right: 0 }}
              >
                VOICE
              </S.TextElement>
            </S.VoiceElement>
            <S.CarElement variants={variants.car} initial="hidden" animate={step2Controls}>
              {/* <SVG src={Car} /> */}
              <Img src={ssss} />

              <S.TextElement
                inherit={false}
                variants={variants.opacity}
                initial="hidden"
                animate={step4Controls}
                style={{ bottom: -30, right: -50 }}
              >
                NATIVE
                <br />
                APPS
              </S.TextElement>
            </S.CarElement>
            <S.AlgoliaElement variants={variants.algolia} initial="hidden" animate={step2Controls}>
              <Img src={Containers} alt="Algolia search" />
              <S.LogoElement
                style={{
                  top: -70,
                  right: 0,
                }}
              >
                {/* <SVG src={Algolia} /> */}
                <Img src={ssss} />
              </S.LogoElement>
            </S.AlgoliaElement>
            <S.ApplePayElement variants={variants.applePay} initial="hidden" animate={step3Controls}>
              <Img src={Containers} alt="Apple Pay" />
            </S.ApplePayElement>
            <S.SocialElement variants={variants.social} initial="hidden" animate={step3Controls}>
              <div>
                <Img src={Containers} alt="Social" />
                <S.TextElement
                  inherit={false}
                  variants={variants.opacity}
                  initial="hidden"
                  animate={step4Controls}
                  style={{
                    right: -60,
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                >
                  SOCIAL
                </S.TextElement>
              </div>
            </S.SocialElement>
            <S.ContainersElement variants={variants.containers} initial="hidden" animate={step4Controls}>
              {/* <SVG src={Containers} /> */}
              <Img src={ThinkupDesktop} alt="Social" width={400} height={300} />
              <S.TextElement
                inherit={false}
                variants={variants.opacity}
                initial="hidden"
                animate={step4Controls}
                style={{ top: 0, right: -40 }}
              >
                B2B
              </S.TextElement>
            </S.ContainersElement>
            <S.LogoElement
              variants={variants.algolia}
              initial="hidden"
              animate={step2Controls}
              style={{
                right: 240,
                top: 130,
              }}
            >
              {/* <SVG src={Stripe} /> */}
              <Img src={ssss} alt="2" />
            </S.LogoElement>
            <S.LogoElement
              variants={variants.algolia}
              initial="hidden"
              animate={step2Controls}
              style={{
                right: 120,
                top: 250,
              }}
            >
              {/* <SVG src={Klaviyo} /> */}
              <Img src={ssss} />
            </S.LogoElement>
            <S.LogoElement
              variants={variants.opacity}
              initial="hidden"
              animate={step3Controls}
              style={{
                right: 300,
                top: 310,
              }}
            >
              {/* <SVG src={Nextjs} /> */}
              <Img src={ssss} />
            </S.LogoElement>
            <S.LogoElement
              variants={variants.contentful}
              initial="hidden"
              animate={step4Controls}
              style={{
                right: 300,
                bottom: 250,
              }}
            >
              {/* <SVG src={Contentful} /> */}
              <Img src={ssss} />
            </S.LogoElement>
            <S.LogoElement
              variants={variants.contentful}
              initial="hidden"
              animate={step4Controls}
              style={{
                right: -100,
                bottom: -10,
                width: '300px',
                objectFit: 'cover',
              }}
            >
              {/* <SVG src={Avalara} /> */}
              <Img src={pdf} alt="1" />
            </S.LogoElement>
            <S.LogoElement
              variants={variants.strapi}
              initial="hidden"
              animate={step4Controls}
              style={{
                right: 500,
                bottom: 100,
              }}
            >
              {/* <SVG src={Strapi} /> */}
              <Img src={ssss} />
            </S.LogoElement>
          </S.VortexContainer>
        </S.OrbWrapper>
      </S.PaddedContainer>
    </S.DesktopContainer>
  );
};
