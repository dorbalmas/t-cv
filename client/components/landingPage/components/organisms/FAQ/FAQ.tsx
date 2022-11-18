import React from 'react';

import { FluidContainer } from '@/components/landingPage/components/style/FluidContainer/FluidContainer';

import { faqData } from './faqData';
import { FAQRow } from './FAQRow';
import * as S from './styles';

export const FAQ: React.FC = () => {
  return (
    <S.FAQContainer>
      <S.FAQContainerContent id="FAQs">
        <FluidContainer>
          <S.FAQContainerInner>
            <S.FAQContainerHeader>
              <S.Title>FAQs</S.Title>
            </S.FAQContainerHeader>
            {faqData.map((data, index) => (
              <FAQRow key={index} {...data} />
            ))}
          </S.FAQContainerInner>
        </FluidContainer>
      </S.FAQContainerContent>
    </S.FAQContainer>
  );
};
export default FAQ;
