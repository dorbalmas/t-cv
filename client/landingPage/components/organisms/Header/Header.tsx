import { DesktopMenu } from 'landingPage/components/molecules/DesktopMenu/DesktopMenu';
import { MobileMenu } from 'landingPage/components/molecules/MobileMenu/MobileMenu';
import { FluidContainer } from 'landingPage/components/style/FluidContainer/FluidContainer';
import { useScrollDirection } from 'landingPage/hooks/useScrollDirection';
import Link from 'next/link';
// import { IData, IHeaderProps } from './types';
import React, { useCallback, useEffect, useState } from 'react';

import * as S from './styles';
type IHeaderProps = {
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  customHeaderHeight: number;
};

export const Header = ({ isMobile, isDesktop, isTablet, customHeaderHeight }: IHeaderProps) => {
  const showOnScroll = true;
  const [activeItem, setActiveItem] = useState(null);
  const [type, setType] = useState<'fixed' | 'normal'>('normal');

  const scrollProps = customHeaderHeight
    ? { headerH: customHeaderHeight, isMobile: isMobile || isTablet }
    : { isMobile: isMobile || isTablet };
  const { isScrolled, scrollToTop: scrollToTopBase } = useScrollDirection(scrollProps);
  const scrollToTop = showOnScroll ? scrollToTopBase : showOnScroll;

  const resetMenu = useCallback(() => {
    setActiveItem(null);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setType(scrollToTop ? 'fixed' : 'normal');
    }
  }, [scrollToTop]);

  useEffect(() => {
    setType(isMobile ? 'fixed' : 'normal');
  }, [isMobile]);

  const renderMenu = () => (
    <DesktopMenu
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      resetMenu={resetMenu}
      isMobile={isMobile}
      scrollToTop={scrollToTop}
      variant={undefined}
    />
  );

  const renderRightPart = () => (
    <S.RightPart>
      <S.SignIn>Login</S.SignIn>
      <S.SignUp>Sign Up</S.SignUp>
    </S.RightPart>
  );

  const renderHamburger = () => (
    <S.MobileRightPart>
      <MobileMenu isFixed={isScrolled} />
    </S.MobileRightPart>
  );
  const isInitialized = isDesktop !== isMobile || isDesktop !== isTablet;

  return isInitialized ? (
    <S.Header id="main-header" type={type} show={scrollToTop} isMobile={isMobile}>
      <FluidContainer>
        <S.Content>
          {/* <S.LeftPart> */}
          <S.Logo>
            <Link href={''}>tivlotcv logo</Link>
          </S.Logo>
          {isDesktop && renderMenu()}
          {/* </S.LeftPart> */}
          {isDesktop && renderRightPart()}
          {!isDesktop && renderHamburger()}
        </S.Content>
      </FluidContainer>
    </S.Header>
  ) : null;
};

export default Header;
