// import { EcommerceIntroNew } from '@components/molecules';
import { EcommerceIntroNew } from 'landingPage/components/molecules/EcommerceIntroNew/EcommerceIntroNew';
import { Dashboard } from 'landingPage/components/organisms/Dashboard/Dashboard';
import { SectionIntegrations } from 'landingPage/components/organisms/SectionIntegrations/SectionIntegrations';
import { useRefPositionData } from 'landingPage/hooks/useRefPositionData';
import { useRelativeScrollProgress } from 'landingPage/hooks/useRelativeScrollProgress';
import React, { useRef } from 'react';

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
