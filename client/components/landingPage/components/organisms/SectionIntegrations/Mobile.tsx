import { MotionValue, useTransform } from 'framer-motion';
import Img from 'next/image';
import React from 'react';

import Avalara from '@/components/landingPage/assets/logo.svg';
import Containers from '@/components/landingPage/assets/logo.svg';
import Car from '@/components/landingPage/assets/logo.svg';
import Contentful from '@/components/landingPage/assets/logo.svg';
import Klaviyo from '@/components/landingPage/assets/logo.svg';
import Mollie from '@/components/landingPage/assets/logo.svg';
import Nextjs from '@/components/landingPage/assets/logo.svg';
import Strapi from '@/components/landingPage/assets/logo.svg';
import Stripe from '@/components/landingPage/assets/logo.svg';
import Voice from '@/components/landingPage/assets/logo.svg';
// elements
import dor from '@/components/landingPage/assets/srcFolders.png';

// brand logos
import * as S from './styles';

export const Mobile: React.FC<{ scrollProgress: MotionValue }> = ({ scrollProgress }) => {
  const opacity = useTransform(scrollProgress, [0.5, 0.7], [0, 1]);
  const translateY = useTransform(scrollProgress, [0.5, 0.7], [50, 0]);

  return (
    <S.Container>
      <S.MobileHero>
        <S.Car
          style={{
            opacity,
            translateY,
          }}
        >
          <Img src={Car} />
        </S.Car>
        <S.Containers
          style={{
            opacity,
            translateY,
          }}
        >
          <Img src={Containers} />
        </S.Containers>
        <S.Voice
          style={{
            opacity,
            translateY,
          }}
        >
          <Img src={Voice} />
        </S.Voice>
      </S.MobileHero>
      <S.PaddedContainer>
        <S.Title>
          <b>
            Headles
            <S.SLetter>k</S.SLetter> Commerce
          </b>
        </S.Title>
        <S.Text>
          Truly omni-channel with finely-crafted, extremely flexible and complete commerce API. Use your favorite CMS,
          CRM, fulfilment API, PIM, POS, ERP or innovations of tomorrow.
        </S.Text>
        <S.LogoBlockContainer>
          <S.LogoBlock>
            <Img src={dor} />
          </S.LogoBlock>
          <S.LogoBlock>
            <Img src={Avalara} />
          </S.LogoBlock>
          <S.LogoBlock>
            <Img src={Contentful} />
          </S.LogoBlock>
          <S.LogoBlock>
            <Img src={Stripe} />
          </S.LogoBlock>
          <S.LogoBlock>
            <Img src={Mollie} />
          </S.LogoBlock>
          <S.LogoBlock>
            <Img src={Klaviyo} />
          </S.LogoBlock>
          <S.LogoBlock>
            <Img src={Nextjs} />
          </S.LogoBlock>
          <S.LogoBlock>
            <Img src={Strapi} />
          </S.LogoBlock>
        </S.LogoBlockContainer>
      </S.PaddedContainer>
    </S.Container>
  );
};
