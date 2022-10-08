// import { graphql, useStaticQuery } from 'gatsby';
// import { REGISTER } from '@core/url';
// import { Icon } from 'landingPage/components/atoms/Icon/Icon';
import React from 'react';

import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

import * as S from './styles';
// import { IProps } from './types';

// const globalsQuery = graphql`
//   query {
//     strapi {
//       globals(sort: "created_at:desc", limit: 1) {
//         articletitle
//         articleurl
//       }
//     }
//   }
// `;

export const EcommerceIntroNew = React.forwardRef<HTMLDivElement>((_, ref) => {
  //   const data = useStaticQuery(globalsQuery);
  //   const { globals } = data.strapi;

  return (
    <S.Intro ref={ref}>
      <S.BlogPost>
        <div></div>
      </S.BlogPost>
      <S.LanguageSwitcherContainer>
        <LanguageSwitcher />
      </S.LanguageSwitcherContainer>
      <S.Title>
        <b>The commerce API that puts developers first</b>
      </S.Title>
      <S.Text>
        An open-source, GraphQL-first e-commerce platform delivering ultra-fast, dynamic and personalized shopping
        experiences.
      </S.Text>
      <S.BottomPart>
        <div>
          <a href="https://demo.saleor.io/dashboard">
            <S.ButtonGetStarted>Try for free</S.ButtonGetStarted>
          </a>
        </div>
        {/* <S.SandboxLink> */}
        {/* <a href={REGISTER}> */}
        {/* <S.Link>Start building for free</S.Link> */}
        {/* </a> */}
        {/* </S.SandboxLink> */}
      </S.BottomPart>
    </S.Intro>
  );
});

EcommerceIntroNew.displayName = 'EcommerceIntroNew';
export default EcommerceIntroNew;
