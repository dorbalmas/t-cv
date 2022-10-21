import { breakpoints, styled } from '@/components/landingPage/globalStyles/theme';

// import background_lines_2 from '../../../../images/background_lines_2.svg';

export const Title = styled.h2`
  text-align: center;
  font-size: calc(2.4rem * 0.625);
  font-weight: 700;
  margin-top: 0;
  @media (min-width: ${breakpoints.sm}em) {
    font-size: calc(3.6rem * 0.625);
    font-weight: 600;
  }
`;

export const FAQRowContent = styled.div<{ isOpen: boolean }>`
  font-size: calc(1.4rem * 0.625);
  text-align: left;
  color: grey;
  width: 100%;
  overflow: hidden;
  will-change: max-height;
  max-height: ${(props) => (props.isOpen ? '30rem' : 0)};
  transition: max-height 0.4s ease-in-out;
  max-height: ${(props) => (props.isOpen ? '80rem' : 0)};
  padding-left: 1rem;
  p,
  ul {
    font-size: calc(1.5rem * 0.625);
    line-height: 1.5;
    max-width: 96%;
    @media (min-width: ${breakpoints.sm}em) {
      font-size: calc(1.6rem * 0.625);
      font-weight: 300;
      max-width: 90%;
    }
  }
  a {
    color: #036dff;
  }
  h6 {
    font-size: calc(1.4rem * 0.625);
    font-weight: 400;
    margin-top: 1.4rem;
  }
  ul {
    margin-top: 0.5rem;
    padding-left: 2rem;
  }
`;

export const FAQContainerHeader = styled.div`
  margin-bottom: calc(4rem * 0.625);
`;

export const FAQContainerInner = styled.div`
  position: relative;
  max-width: calc(84rem * 0.625);
  margin: 0 auto;
  h2 {
    font-weight: 600;
  }
`;

export const FAQRow = styled.div`
  border-bottom: 1px solid rgb(204, 207, 216);
  h5 {
    font-size: calc(1.6rem * 0.625);
    margin: 0;
    @media (min-width: ${breakpoints.sm}em) {
      font-size: calc(2rem * 0.625);
    }
  }
`;

export const FAQRowTitle = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 2.4rem 1rem;
  width: 100%;
  h5 {
    padding-right: calc(3rem * 0.625);
    text-align: left;
    font-size: calc(1.6rem * 0.625);
    font-weight: 500;
    @media (min-width: ${breakpoints.sm}em) {
      font-size: calc(1.8rem * 0.625);
    }
  }
  &:hover {
    h5 {
      color: black;
    }
  }
`;

export const PlusIcon = styled.div<{ active: boolean }>`
  transform: ${(props) => (props.active ? `rotate(135deg)` : `none`)};
  transition: transform 0.3s ease;
`;

export const FAQContainer = styled.section``;

export const FAQContainerContent = styled.div`
  position: relative;
  overflow-x: hidden;
  background: #fafafa;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  padding-top: calc(18rem * 0.625);
  padding-bottom: calc(24rem * 0.625);
  @media (min-width: ${breakpoints.sm}em) {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center 58rem;
  }
  @media (min-width: ${breakpoints.xlg}em) {
    background-size: ${breakpoints.xlg}em;
  }
`;
