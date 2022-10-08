import { MotionValue, useTransform } from 'framer-motion';
import Containers from 'landingPage/assets/logo.svg';
// import { useDashboardImages } from './useDasboardImages';
import Img from 'next/image';
import React from 'react';

import * as S from './styles';

type Props = {
  progress: MotionValue<number>;
  isMobile: boolean;
};

const getOffsets = (height: number, isMobile: boolean) => ({
  variants: {
    x: -300,
    y: -height * 0.75,
  },
  channels: {
    x: 100,
    y: -height * 0.9,
  },
  background: isMobile
    ? {
        x: 150,
        y: -50,
      }
    : {
        x: 550,
        y: -height * 0.25,
      },
  order: isMobile
    ? {
        x: 200,
        y: -height * 0.44,
      }
    : {
        x: 700,
        y: -height * 0.5,
      },
  mainHero: isMobile
    ? {
        x: 250,
        y: -height * 0.2,
      }
    : {
        x: 0,
        y: -height * 0.5,
      },
  history: isMobile
    ? {
        x: 0,
        y: -height * 0.4,
      }
    : {
        x: -100,
        y: -300,
      },
  navigation: {
    x: -100,
    y: 0,
  },
  customer: {
    x: 0,
    y: 200,
  },
  salesChannel: {
    x: 0,
    y: -200,
  },
  header: {
    y: -100,
    x: 0,
  },
});

export const Dashboard: React.FC<Props> = ({ progress, isMobile }) => {
  //   const images = useDashboardImages();
  const [key, incrementKey] = React.useReducer((x) => x + 1, 0);
  const [offsets, setOffsets] = React.useState<Record<string, { x: number; y: number }>>();
  const slowScatterProgress = useTransform(progress, [0, 0.5], [0, 1]);
  const fastScatterProgress = useTransform(progress, [0, 0.4], [0, 1]);
  const opacityProgress = useTransform(progress, [0.4, 0.5], [0, 1]);
  const bgScaleProgress = useTransform(
    progress,
    isMobile ? [0, 0.4, 1] : [0.6, 0.9, 1],
    isMobile ? [1, 1.5, 6] : [1, 5, 8]
  );
  const scaleProgress = useTransform(progress, [0.25, 1], [1, 0.5]);

  React.useEffect(() => {
    const generateOffsets = () => {
      if (typeof window === 'undefined') {
        return null;
      }
      setOffsets(getOffsets(window.innerHeight, isMobile));
      incrementKey();
    };

    generateOffsets();
  }, [isMobile]);

  if (typeof window === 'undefined') {
    return null;
  }

  if (!offsets) {
    return <S.OverflowingContainer width={typeof window === 'undefined' ? 770 : window.innerWidth} />;
  }

  return (
    <S.OverflowingContainer width={window.innerWidth} key={key}>
      {!isMobile && (
        <>
          <S.Variants progress={slowScatterProgress} offset={offsets.variants}>
            <Img src={Containers} alt="Dashboard variants" />
          </S.Variants>
          <S.Channels progress={slowScatterProgress} offset={offsets.channels}>
            <Img src={Containers} alt="Dashboard channels" />
          </S.Channels>
        </>
      )}

      <S.Background
        progress={fastScatterProgress}
        offset={offsets.background}
        isMobile={isMobile}
        motionStyle={{
          scale: bgScaleProgress,
        }}
      />
      <S.Container>
        <S.Navigation
          progress={slowScatterProgress}
          offset={offsets.navigation}
          motionStyle={{ opacity: opacityProgress }}
        >
          <Img src={Containers} alt="Dashboard navigation" />
        </S.Navigation>
        <S.Header progress={slowScatterProgress} offset={offsets.header} motionStyle={{ opacity: opacityProgress }}>
          <Img src={Containers} alt="Dashboard header" />
        </S.Header>
      </S.Container>
      <S.SalesChannel progress={slowScatterProgress} offset={offsets.salesChannel}>
        <Img src={Containers} alt="Dashboard sales channel" />
      </S.SalesChannel>
      <S.History progress={fastScatterProgress} offset={offsets.history}>
        <Img src={Containers} alt="Dashboard order history" />
      </S.History>
      <S.Customer progress={slowScatterProgress} offset={offsets.customer}>
        <Img src={Containers} alt="Dashboard customer details" />
      </S.Customer>
      <S.MainHero
        progress={slowScatterProgress}
        offset={offsets.mainHero}
        motionStyle={{
          scale: scaleProgress,
        }}
        direction="outward"
      >
        <Img src={Containers} alt="Lush storefront preview" />
      </S.MainHero>
      <S.Order progress={fastScatterProgress} offset={offsets.order}>
        <Img src={Containers} alt="Dashboard order details" />
      </S.Order>
    </S.OverflowingContainer>
  );
};
