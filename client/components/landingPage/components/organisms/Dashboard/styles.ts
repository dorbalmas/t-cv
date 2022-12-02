import { ScatterElement } from '@/components/landingPage/components/molecules/ScatterElement/ScatterElement';
import { media } from '@/components/landingPage/globalStyles/media';
import { styled } from '@/components/landingPage/globalStyles/theme';

export const OverflowingContainer = styled.div<{ width: number }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'navigation header header header header header header header header'
    'navigation header header header header header header header header'
    'navigation header header header header header header header header'
    'navigation order order order order order sales-channel sales-channel sales-channel'
    'navigation order order order order order sales-channel sales-channel sales-channel'
    'navigation order order order order order sales-channel sales-channel sales-channel'
    'navigation order order order order order customer customer customer'
    'navigation history history history history history customer customer customer'
    'blank history history history history history customer customer customer'
    'blank history history history history history customer customer customer';
  width: ${({ width }) => width}px;
  height: ${({ width }) => Math.round(width / 1.6)}px;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 5px;
  gap: 0px 15px;

  ${media.sm`
    width: 770px;
    height: 481px;
    padding-top: 20px;
    padding-right: 30px;
    padding-left: 5px;
    gap: 0px 30px;
  `}
`;

export const Container = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'navigation header header header header header header header header'
    'navigation header header header header header header header header'
    'navigation header header header header header header header header'
    'navigation order order order order order sales-channel sales-channel sales-channel'
    'navigation order order order order order sales-channel sales-channel sales-channel'
    'navigation order order order order order sales-channel sales-channel sales-channel'
    'navigation order order order order order customer customer customer'
    'navigation history history history history history customer customer customer'
    'blank history history history history history customer customer customer'
    'blank history history history history history customer customer customer';
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 5px;
  gap: 0px 15px;

  ${media.sm`
    padding-top: 20px;
    padding-right: 30px;
    padding-left: 5px;
    gap: 0px 30px;
  `}
`;

export const Background = styled(ScatterElement)<{ isMobile: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 11px;
  background-color: #f5f5f5;
  transform-origin: ${({ isMobile }) => (isMobile ? 'top center' : 'center center')};
`;

export const Navigation = styled(ScatterElement)`
  grid-area: navigation;
  z-index: 1;
  max-width: 39px;

  div {
    height: 100%;
  }
`;

export const Header = styled(ScatterElement)`
  grid-area: header;
  z-index: 1;
  max-width: 650px;

  div {
    width: 100%;
  }
`;

export const Order = styled(ScatterElement)`
  grid-area: order;
  z-index: 1;
  max-width: 395px;

  div {
    border-radius: 3px;

    ${media.sm`
    border-radius: 6px;
  `}/* box-shadow: 12px 13px 38px rgba(40, 32, 100, 0.1); */
  }
`;

export const History = styled(ScatterElement)`
  display: flex;
  align-items: flex-end;
  grid-area: history;
  z-index: 1;
  max-width: 395px;

  div {
    width: 100%;
  }
`;

export const SalesChannel = styled(ScatterElement)`
  grid-area: sales-channel;
  z-index: 1;
  max-width: 225px;

  div {
    border-radius: 3px;

    ${media.sm`
  border-radius: 6px;
`}
  }
`;

export const Customer = styled(ScatterElement)`
  display: flex;
  align-items: flex-end;
  grid-area: customer;
  z-index: 1;
  max-width: 225px;

  div {
    width: 100%;
    max-height: 225px;
    border-radius: 3px;

    ${media.sm`
  border-radius: 6px;
`}
  }
`;

export const Variants = styled(ScatterElement)`
  position: absolute;
  left: 20px;
  top: 50%;
  width: 460px;
  div {
    border-radius: 3px;

    ${media.sm`
  border-radius: 6px;
`}
    box-shadow: 12px 13px 38px rgba(40, 32, 100, 0.08);
    transform: translate(-60%, -40%);
  }
`;

export const Channels = styled(ScatterElement)`
  position: absolute;
  right: 20px;
  top: 50%;
  width: 248px;
  div {
    border-radius: 3px;

    ${media.sm`
  border-radius: 6px;
`}
    box-shadow: 12px 13px 38px rgba(40, 32, 100, 0.08);
    transform: translate(110%, -50%);
  }
`;

export const MainHero = styled(ScatterElement)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  max-width: 770px;
  z-index: 1;
  div {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0px -1px 17px rgba(40, 35, 74, 0.06);
    transform: translate(20%, max(-80%, -20vh));

    ${media.sm`
      transform: translate(0%, max(-50%, -20vh));
	  border-radius: 6px;
  `}
  }
`;
