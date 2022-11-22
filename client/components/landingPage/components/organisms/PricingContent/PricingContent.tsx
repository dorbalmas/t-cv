import {
  Check,
  FileDownloadOutlined,
  LanguageOutlined,
  LinkOutlined,
  TipsAndUpdatesOutlined,
  WorkspacePremiumOutlined,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import React from 'react';

import { FluidContainer } from '@/components/landingPage/components/style/FluidContainer/FluidContainer';

import * as S from './styles';
const Plan = ({ plan }: any) => {
  return (
    <>
      <S.PriceColumn planKind={plan.kind} onClick={() => console.log('click on all of the card')}>
        <S.PriceHeder>
          {plan.name === 'premium' ? <S.MostPopular planKind={plan.kind}>most popular</S.MostPopular> : ''}
          <S.Price>
            <S.CurrencyType>{plan.currencyType}</S.CurrencyType>
            {plan.price}
            <S.PlanType>/{plan.type}</S.PlanType>
          </S.Price>
          <S.PlanName>{plan.name}</S.PlanName>
        </S.PriceHeder>
        <S.ButtonCTA planKind={plan.kind}>Join Us</S.ButtonCTA>
        <S.Feature>
          <S.Icon planKind={plan.kind}>
            <LanguageOutlined fontSize="small" />
          </S.Icon>
          Multiple language support
        </S.Feature>
        <S.Feature>
          <S.Icon planKind={plan.kind}>
            <FileDownloadOutlined fontSize="small" />
          </S.Icon>
          Unlimited downloads and storage
        </S.Feature>
        <S.Feature>
          <S.Icon planKind={plan.kind}>
            <LinkOutlined fontSize="small" />
          </S.Icon>
          Share live links to your resumes
        </S.Feature>
        <S.Feature inactive={plan.name === 'basic'}>
          <S.Icon planKind={plan.kind}>
            {plan.name === 'basic' ? (
              <WorkspacePremiumOutlined fontSize="small" color="disabled" />
            ) : (
              <WorkspacePremiumOutlined fontSize="small" />
            )}
          </S.Icon>
          Access to premium templates
        </S.Feature>
        <S.Feature inactive={plan.name === 'basic'}>
          <S.Icon planKind={plan.kind}>
            {plan.name === 'basic' ? (
              <TipsAndUpdatesOutlined fontSize="small" color="disabled" />
            ) : (
              <TipsAndUpdatesOutlined fontSize="small" />
            )}{' '}
          </S.Icon>
          Tips, guideline and real examples
        </S.Feature>
        <S.Divider />
        <S.Feature>
          <S.Icon planKind={plan.kind}>
            <Check fontSize="small" />
          </S.Icon>
          No Ads
        </S.Feature>
        <S.Feature>
          <S.Icon planKind={plan.kind}>
            <Check fontSize="small" />
          </S.Icon>
          Cancel free at any time
        </S.Feature>
        <S.Feature>
          <S.Icon planKind={plan.kind}>
            <Check fontSize="small" />
          </S.Icon>
          Online professional support
        </S.Feature>
      </S.PriceColumn>
    </>
  );
};
export const PricingContent = () => {
  const initialAnimationData = {
    opacity: 0,
    y: 50,
  };

  const entryAnimation = {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeIn', duration: 1 },
  };

  const plans = {
    basic: {
      kind: 'basic',
      name: 'basic',
      type: '14 days',
      currencyType: '$',
      price: ' 2.95',
    },
    premium: {
      kind: 'premium',
      name: 'premium',
      type: '14 days',
      currencyType: '$',
      price: ' 3.95',
    },
    premiumMonthly: {
      kind: 'premiumMonthly',
      name: 'premium (monthly)',
      type: 'monthly',
      currencyType: '$',
      price: ' 5.95',
    },
  };
  return (
    <>
      <S.Container>
        <motion.div
          animate={entryAnimation}
          initial={initialAnimationData}
          // key needed for remount
        >
          <FluidContainer>
            <S.PricingContainer>
              <S.PricingContainerHeader id="Pricing">
                <S.PricingHeaderSubtitle>Subscription plans</S.PricingHeaderSubtitle>
                <S.Title>
                  Ready to <S.StandOut>standout</S.StandOut>?
                </S.Title>
              </S.PricingContainerHeader>
              <S.PriceComparison>
                <Plan plan={plans.basic} />
                <Plan plan={plans.premium} />
                <Plan plan={plans.premiumMonthly} />
                {/* <S.PriceColumn planKind={planType.enterprise}>
                  <S.PriceHeder>
                    <S.Price>
                      <S.PlanHeader>COLLAB</S.PlanHeader>
                    </S.Price>
                    <S.PlanName>enterprise</S.PlanName>
                  </S.PriceHeder>
                  <S.ButtonCTA planKind={planType.enterprise}>Lets Talk</S.ButtonCTA>
                  <S.Intro>
                    If you are an <b>Educational Institutions</b> and you want to get:
                  </S.Intro>
                  <S.Feature>
                    <S.Icon planKind={planType.enterprise}>
                      <FiberManualRecordOutlined fontSize="small" />
                    </S.Icon>
                    Promo code
                  </S.Feature>
                  <S.Feature>
                    <S.Icon planKind={planType.enterprise}>
                      <FiberManualRecordOutlined fontSize="small" />
                    </S.Icon>
                    Meetings
                  </S.Feature>
                  <S.Feature>
                    <S.Icon planKind={planType.enterprise}>
                      <FiberManualRecordOutlined fontSize="small" />
                    </S.Icon>
                    Presentations
                  </S.Feature>
                  <S.Feature>
                    <S.Icon planKind={planType.enterprise}>
                      <FiberManualRecordOutlined fontSize="small" />
                    </S.Icon>
                    And more!
                  </S.Feature>
                </S.PriceColumn> */}
              </S.PriceComparison>
            </S.PricingContainer>
          </FluidContainer>
        </motion.div>
      </S.Container>
    </>
  );
};

export default PricingContent;
