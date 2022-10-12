// import { EcommerceIntroNew } from '@components/molecules';
import React, { useRef } from 'react';

import { EcommerceIntroNew } from '@/components/landingPage/components/molecules/EcommerceIntroNew/EcommerceIntroNew';
import { Dashboard } from '@/components/landingPage/components/organisms/Dashboard/Dashboard';
import { SectionIntegrations } from '@/components/landingPage/components/organisms/SectionIntegrations/SectionIntegrations';
import { useRefPositionData } from '@/components/landingPage/hooks/useRefPositionData';
import { useRelativeScrollProgress } from '@/components/landingPage/hooks/useRelativeScrollProgress';

import * as S from './styles';

export const SectionMain: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const sectionPosition = useRefPositionData(sectionRef);
  const { scrollProgress } = useRelativeScrollProgress(sectionRef, {
    height: sectionPosition.height,
    top: sectionPosition.top,
  });

  return (
    <S.Container>
      <S.Section ref={sectionRef}>
        <S.FirstSection>
          <EcommerceIntroNew />
        </S.FirstSection>
        <S.DashboardContainer>
          <Dashboard progress={scrollProgress} isMobile={isMobile} />
        </S.DashboardContainer>
      </S.Section>
      <SectionIntegrations isMobile={isMobile} scrollProgress={scrollProgress} />
    </S.Container>
  );
};

SectionMain.displayName = 'SectionMain';
export default SectionMain;
