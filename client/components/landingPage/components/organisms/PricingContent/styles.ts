import { css } from 'styled-components';

import { media } from '@/components/landingPage/globalStyles/media';
import { breakpoints, defaultTheme, styled } from '@/components/landingPage/globalStyles/theme';

const planColors: any = {
  basic: '#28234A',
  premium: '#ea3a60',
  premiumMonthly: '#28234A',
  enterprise: '#036DFF',
};

export const Container = styled.div`
  @media (min-width: ${breakpoints.sm}em) {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center -4rem;
  }
  @media (min-width: ${breakpoints.xlg}em) {
    background-size: ${breakpoints.xlg}em;
  }
`;

export const PricingContainer = styled.div`
  margin-bottom: 4rem;
  padding-top: 4rem;
  ${media.sm`
  margin-bottom: 12rem;
  `}
`;

export const PricingContainerHeader = styled.div`
  h2 {
    text-align: center;
    margin-top: calc(1.5rem * 0.625);
  }
  p {
    text-align: center;
  }
`;

export const PricingHeaderSubtitle = styled.p`
  color: ${planColors.premium};
  ${defaultTheme.typography.s1};
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: calc(2.4rem);
  font-weight: 700;
  margin-top: 0;
  @media (min-width: ${breakpoints.sm}em) {
    font-size: calc(3.6rem);
    font-weight: 600;
  }
`;
export const StandOut = styled.span`
  color: black;
  background: #ffffff;
  text-shadow: 1px 3px 0 #969696, 1px 9px 5px #aba8a8;
`;

export const PriceComparison = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  margin-top: 4rem;
`;

export const PriceColumn = styled.div<{
  planKind: string;
}>`
  position: relative;
  background: ${(props) => (props.planKind == 'premium' ? 'rgba(223, 78, 117, 0.08)' : 'white')};
  border: 2px solid ${(props) => (props.planKind == 'premium' ? 'rgb(223, 78, 117)' : 'white')};
  box-shadow: ${(props) =>
    props.planKind == 'premium' ? '0 7px 30px rgba(52, 13, 135, 0.3)' : '0 7px 30px rgba(52, 31, 97, 0.1)'};
  padding: 2rem;
  flex-grow: 1;
  flex-basis: 0;
  max-width: 325px;
  border-radius: 8px;
  ${(props) =>
    props.planKind == 'premium' &&
    css`
      margin-top: -1.5rem;
      padding-top: 3.5rem;
      margin-bottom: -1.5rem;
      padding-bottom: 3.5rem;
    `}
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const MostPopular = styled.div<{
  planKind: string;
}>`
  color: ${(props) => planColors[props.planKind]};
  font-size: 0.8rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  right: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export const PriceHeder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

export const Price = styled.div`
  font-size: 3.5rem;
  display: flex;
`;

export const CurrencyType = styled.div`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-right: 0.25rem;
`;

export const PlanType = styled.div`
  font-size: 0.75rem;
  align-self: flex-end;
  margin-bottom: 1.1rem;
  text-transform: uppercase;
`;

export const PlanName = styled.div`
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-top: 1rem;
  margin-bottom: 0;
`;

export const PlanHeader = styled.div`
  font-weight: 500;
`;

export const Intro = styled.div`
  width: 100%;
  order: 4;
  display: block;
  font-size: calc(1.2rem * 0.625);
  text-align: center;
  opacity: 0.6;
  min-height: 1.9rem;
  margin-bottom: calc(2rem * 0.625);
  b {
    color: ${planColors.enterprise};
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Feature = styled.div<{
  inactive?: boolean;
}>`
  ${(props) =>
    props.inactive &&
    css`
      color: #999;
      text-decoration-line: line-through;
    `}
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

export const Icon = styled.div<{
  planKind: string;
}>`
  margin-right: 0.5rem;
  color: ${(props) => planColors[props.planKind]};
`;

export const ButtonCTA = styled.button<{
  planKind: string;
}>`
  background-color: ${(props) => planColors[props.planKind]};
  color: white;
  border: 2px solid ${(props) => planColors[props.planKind]};
  width: 100%;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 4px;
  outline: none;
  margin-top: 2rem;
  margin-bottom: calc(2rem * 0.625);
  transition: 300ms;
  transform: scale(1);
  &:hover:not(:disabled),
  &:active {
    background-color: white;
    color: ${(props) => planColors[props.planKind]};
  }
`;
