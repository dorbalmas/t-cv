import Link from 'next/link';
import { useTranslation } from 'next-i18next';
// import { IData, IHeaderProps } from './types';
import React, { useEffect, useState } from 'react';

import { DesktopMenu } from '@/components/landingPage/components/molecules/DesktopMenu/DesktopMenu';
import { MobileMenu } from '@/components/landingPage/components/molecules/MobileMenu/MobileMenu';
import { FluidContainer } from '@/components/landingPage/components/style/FluidContainer/FluidContainer';
import { useScrollDirection } from '@/components/landingPage/hooks/useScrollDirection';
import { logout } from '@/store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';

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

  //   const resetMenu = useCallback(() => {
  //     setActiveItem(null);
  //   }, []);

  useEffect(() => {
    if (!isMobile) {
      setType(scrollToTop ? 'fixed' : 'normal');
    }
  }, [isMobile, scrollToTop]);

  useEffect(() => {
    setType(isMobile ? 'fixed' : 'normal');
  }, [isMobile]);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const handleLogin = () => dispatch(setModalState({ modal: 'auth.login', state: { open: true } }));
  const handleRegister = () => dispatch(setModalState({ modal: 'auth.register', state: { open: true } }));
  const handleLogout = () => dispatch(logout());

  const renderMenu = () => (
    <DesktopMenu
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      isMobile={isMobile}
      scrollToTop={scrollToTop}
      variant={undefined}
    />
  );

  const renderRightPart = () => (
    <S.RightPart>
      {/* <S.SignIn>Login</S.SignIn>
      <S.SignUp>Sign Up</S.SignUp> */}
      {isLoggedIn ? (
        <>
          <Link href="/dashboard" passHref>
            <S.SignIn>{t<string>('landing.actions.app')}</S.SignIn>
          </Link>

          <S.SignUp onClick={handleLogout}>{t<string>('landing.actions.logout')}</S.SignUp>
        </>
      ) : (
        <>
          <S.SignIn onClick={handleLogin}>{t<string>('landing.actions.login')}</S.SignIn>

          <S.SignUp onClick={handleRegister}>{t<string>('landing.actions.register')}</S.SignUp>
        </>
      )}
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
          <S.LeftPart>
            <S.Logo>
              <Link href={''}>tivlotcv</Link>
            </S.Logo>
          </S.LeftPart>
          {isDesktop && renderMenu()}
          {isDesktop && renderRightPart()}
          {!isDesktop && renderHamburger()}
        </S.Content>
      </FluidContainer>
    </S.Header>
  ) : null;
};

export default Header;
