import { MotionValue, useTransform } from 'framer-motion';
import Avalara from 'landingPage/assets/logo.svg';
// elements
import Containers from 'landingPage/assets/logo.svg';
import Car from 'landingPage/assets/logo.svg';
import Contentful from 'landingPage/assets/logo.svg';
import Klaviyo from 'landingPage/assets/logo.svg';
import Mollie from 'landingPage/assets/logo.svg';
import Nextjs from 'landingPage/assets/logo.svg';
import Strapi from 'landingPage/assets/logo.svg';
import Stripe from 'landingPage/assets/logo.svg';
import Voice from 'landingPage/assets/logo.svg';
// brand logos
import Algolia from 'landingPage/assets/privacy.png';
import Img from 'next/image';
import React from 'react';

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
            <S.SLetter>s{/* <S.SaleorIcon width={40} src={SaleorIcon} /> */}</S.SLetter> Commerce
          </b>
        </S.Title>
        <S.Text>
          Truly omni-channel with finely-crafted, extremely flexible and complete commerce API. Use your favorite CMS,
          CRM, fulfilment API, PIM, POS, ERP or innovations of tomorrow.
        </S.Text>
        <S.LogoBlockContainer>
          <S.LogoBlock>
            <Img src={Algolia} />
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
