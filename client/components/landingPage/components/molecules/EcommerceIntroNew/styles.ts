import { media } from '@/components/landingPage/globalStyles/media';
import { defaultTheme, styled } from '@/components/landingPage/globalStyles/theme';

export const Intro = styled.div`
  position: relative;
  padding-top: calc(13rem * 0.652);
  z-index: 2;
  p {
    margin-left: 0;
    max-width: 49rem;

    ${media.sm`
    margin: auto;
      max-width: 85%;

    `};
    ${media.md`
    margin: auto;
      max-width: calc(55rem * 0.652);
    `};
  }
  ${media.sm`
  padding-top: calc(13rem * 0.652);
    margin-bottom: 0;
  `}
  ${media.md`
  padding-top: calc(11rem * 0.652);

   min-height: 100vh;
  `}
  ${media.lg`
  padding-top: calc(11rem * 0.652);
  `}
`;

// export const BlogPostIcon = styled.div`
//   display: flex;
//   min-width: 23px;
//   max-width: 11rem;
//   min-height: 100%;
//   margin-right: 1rem;
// `;
// export const BlogPostLinkArrow = styled.div`
//   display: flex;
//   margin-left: auto;
//   transition: transform 0.3s ease-in-out;
//   will-change: transform;
//   ${media.sm`
//       margin-left: 1.8rem;
//     `}
// `;
export const BlogPost = styled.div`
  position: relative;
  top: -1.5rem;
  display: inline-block;
  width: 100%;
  border-top: 2px solid #28234a;
  font-size: 1.5rem;
  ${media.md`
    top: 8rem;
    width: auto;
    /* border-top: 1px solid #28234a; */
	`}
  ${media.md`
    top: 10rem;
	`}
	div {
    display: none;
  }
  div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 1.3rem 0px;
  }
  /* &:hover div:last-child {
    transform: translateX(1rem);
  } */
`;
export const LanguageSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 6.7rem;
  ${media.md`
    display: none;
  `}
  button,
  a {
    color: ${defaultTheme.colors.baseDarkFont};
    margin: 0;
    display: block;
    background-color: white;
    scale: 1.5;

    &:hover {
      background-color: white;
    }
    ${media.md`
      color: #0084C7
      font-size: 1.6rem;
    `}
  }
`;
export const Title = styled.h1`
  line-height: 1.2;
  font-weight: ${defaultTheme.typography.lightFontWeight};
  font-size: calc(4.2rem * 0.625);
  margin: 0 0 2rem 0;
  text-align: center;
  ${media.sm`
  font-size: calc(5.7rem * 0.625);
    line-height: 1.1;
    text-align: center;
  `};
  ${media.md`
    max-width: 700px;
    margin: 2rem auto;
  `};
  b {
    font-weight: ${defaultTheme.typography.boldFontWeight};
  }
`;

export const Text = styled.p`
  font-size: calc(1.7rem * 0.625);
  line-height: 1.7;
  font-weight: ${defaultTheme.typography.lightFontWeight};
  color: ${defaultTheme.colors.baseDarkFont};
  text-align: center;
  margin-top: 0;
  ${media.sm`
    text-align: center;
	font-size: calc(2.1rem * 0.625);
  `};
`;

export const BottomPart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 0.4rem;
  padding-bottom: 2rem;
  ${media.xs`
    flex-direction: row;
  `};
  ${media.sm`
    padding-top: 4.5rem;
    padding-bottom: 4rem;
  `}
  a {
    width: 100%;

    ${media.sm`
      width: auto;
    `}
  }
`;

// export const ButtonText = styled.span`
//   display: block;
//   text-align: center;
//   font-size: calc(1.6rem * 0.625);
//   font-weight: ${defaultTheme.typography.semiFontWeight};
//   white-space: nowrap;
// `;

// export const Link = styled.div`
//   color: rgb(5, 109, 255);
//   opacity: 1;
//   transition: opacity 0.3s;
//   white-space: nowrap;

//   :hover {
//     opacity: 0.6;
//   }
// `;

// export const SandboxLink = styled.div`
//   padding: 0.8rem 2rem;
//   margin-top: 2rem;
//   ${media.xs`
//      margin-top: 0;
//      margin-left: 2rem;
//   `};
// `;
export const ButtonGetStarted = styled.button`
  z-index: 1;
  cursor: pointer;
  position: relative;
  width: 200px;
  height: 55px;
  text-align: center;
  padding: 0.61538462em 1em;
  vertical-align: middle;
  color: #fff;
  font-size: calc(1.12em * 0.625);
  border: none;
  border-radius: 5px;
  background-image: linear-gradient(to left bottom, #ea3a60 0 50%, transparent 50% 100%),
    linear-gradient(to right bottom, #ea3a60 0 50%, transparent 50% 100%), linear-gradient(#ea3a60 0 100%);
  background-size: 20% 100%, 20% 100%, 60% 100%;
  background-position: left top, right top, center top;
  background-repeat: no-repeat;
  &:after {
    content: '';
    display: block;
    visibility: hidden;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.7) 100%); /* Safari 5.1-6.0 */
    background: -o-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 100%
    ); /* Opera 11.1-12.0 */
    background: -moz-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 100%
    ); /* Firefox 3.6-15 */
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 100%
    ); /* Standard syntax */

    left: -100%;
    top: 0;
    height: 100%;
    position: absolute;
    transition: none;
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    -ms-transition: none;
    -ms-transform: skewX(-20deg); /* IE 9 */
    -webkit-transform: skewX(-20deg); /* Safari */
    transform: skewX(-20deg);
  }
  &:hover::after {
    visibility: visible;
    left: 150%;
    transition: all 1s;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    -ms-transition: all 1s;
  }
`;
