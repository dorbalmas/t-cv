// import {
//   API,
//   BLOG,
//   CONTACT,
//   CORE_FEATURES,
//   ENTERPRISE,
//   INTEGRATIONS,
//   LAUNCH,
//   LOGIN,
//   MAGENTO,
//   MERCHANDISING,
//   OPEN_SOURCE,
//   PRICING,
//   PWA,
//   REGISTER,
// } from '@core/url';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React, {
  useCallback,
  //  useRef,
  useState,
} from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';

import * as S from './styles';
// import { IProps } from './types';

// const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null;
type IProps = {
  isFixed: boolean;
};
// const productSubmenu = [
//   {
//     text: 'Cloud Platform',
//     link: '/#sectionDeploy',
//     className: 'gtm_cloud_platform',
//   },
//   {
//     text: 'Open source',
//     link: OPEN_SOURCE,
//     className: 'gtm_opensource',
//   },
//   {
//     text: 'Core functionalities',
//     link: CORE_FEATURES,
//     className: 'gtm_core_functionalities',
//   },
//   {
//     text: 'PWA',
//     link: PWA,
//     className: 'gtm_pwa',
//   },
//   {
//     text: 'Merchandising',
//     link: MERCHANDISING,
//     className: 'gtm_mercandising',
//   },
//   {
//     text: 'API-Driven',
//     link: API,
//     className: 'gtm_api_driven',
//   },
//   {
//     text: 'Launch',
//     link: CONTACT,
//     state: { prevUrl: LAUNCH },
//     className: 'gtm_support',
//   },
//   {
//     text: 'Migrating from Magento',
//     link: MAGENTO,
//     state: { prevUrl: LAUNCH },
//     className: 'gtm_success_suport',
//   },
// ];

// const developersMenu = [
//   {
//     text: 'The Headless Open Source Platform',
//     link: OPEN_SOURCE,
//     external: false,
//   },
//   {
//     text: 'Documentation',
//     link: 'https://docs.saleor.io/docs/3.0/developer/',
//     external: true,
//   },
//   {
//     text: 'Saleor Tutorial',
//     link: 'https://saleor.io/learn',
//     className: 'gtm_tutorial',
//     external: true,
//   },
//   {
//     text: 'React Storefront Starter Pack',
//     link: 'https://github.com/saleor/react-storefront',
//     className: 'gtm_react_storefront',
//     external: true,
//   },
//   {
//     text: 'Roadmap',
//     link: 'https://github.com/saleor/saleor/projects/12',
//     className: 'gtm_roadmap',
//     external: true,
//   },
//   {
//     text: 'Open Source Community',
//     link: `${OPEN_SOURCE}#community`,
//     className: 'gtm_opensourcecommunity',
//   },
// ];

export const MobileMenu = ({ isFixed }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const closeMenu = useCallback(() => setOpen(false), []);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => {
    dispatch(setModalState({ modal: 'auth.login', state: { open: true } }));
    closeMenu();
  };
  const handleRegister = () => {
    dispatch(setModalState({ modal: 'auth.register', state: { open: true } }));
    closeMenu();
  };
  const handleClick = (id: string) => {
    const elementId = `#${id}`;
    const section = document.querySelector(elementId);
    closeMenu();
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  //   const scrollY = useRef(0);

  //   useEffect(() => {
  //     if (portalRoot) {
  //       if (open) {
  //         portalRoot.classList.add('open');
  //       } else {
  //         portalRoot.classList.remove('open');
  //       }
  //     }
  //   }, [open]);

  //   useEffect(() => {
  //     const main = document.getElementById('___gatsby');
  //     if (open && main) {
  //       scrollY.current = window.scrollY;
  //       main.classList.add('fixed');
  //       main.scrollTop = scrollY.current;
  //     } else if (!open && main) {
  //       main.classList.remove('fixed');
  //       window.scrollTo(0, scrollY.current);
  //     }
  //   }, [open]);

  //   const renderContent = () => (
  return (
    <div>
      <S.Hamburger
        aria-label="Open mobile menu"
        onClick={() => setOpen((open) => !open)}
        isFixed={isFixed}
        open={open}
      />
      <S.MotionMenu open={open}>
        <S.Logo open={open} onClick={closeMenu}>
          {/* <Link href={'/'}><Logo type={page} /></Link> */}
        </S.Logo>
        <S.MenuContainer>
          <S.Menu open={open}>
            <S.MenuItem
              index={0}
              isOpenMenu={open}
              //   submenuList={productSubmenu}
              onClick={() => handleClick('Home')}
              className="gtm_product"
              //   page={page}
            >
              Home
            </S.MenuItem>
            <S.MenuItem
              index={2}
              isOpenMenu={open}
              //   link={INTEGRATIONS}
              onClick={() => handleClick('Features')}
              className="gtm_integrations"
              //   page={page}
            >
              Features
            </S.MenuItem>
            <S.MenuItem
              index={1}
              isOpenMenu={open}
              //   link={OPEN_SOURCE}
              //   submenuList={developersMenu}
              onClick={() => handleClick('Pricing')}
              className="gtm_developers"
              //   page={page}
            >
              Pricing
            </S.MenuItem>
            <S.MenuItem
              index={1}
              isOpenMenu={open}
              //   link={OPEN_SOURCE}
              //   submenuList={developersMenu}
              onClick={() => handleClick('FAQ')}
              className="gtm_developers"
              //   page={page}
            >
              FAQ
            </S.MenuItem>
            {/* <S.MenuItem
              index={3}
              isOpenMenu={open}
              //  link={BLOG}
              onClick={closeMenu}
              className="gtm_blog"
              //   page={page}
            >
              Blog
            </S.MenuItem> */}
            {isLoggedIn ? (
              <>
                <div></div>
                <S.MenuItem
                  index={6}
                  isOpenMenu={open}
                  //   link={LOGIN}
                  //   external={true}
                  onClick={closeMenu}
                  className="gtm_signin"
                  //   page={page}
                >
                  <Link href="/dashboard" passHref>
                    <S.GoToActionButton>{t<string>('landing.actions.app')}</S.GoToActionButton>
                  </Link>
                </S.MenuItem>

                {/* <S.SignUp onClick={handleLogout}>{t<string>('landing.actions.logout')}</S.SignUp> */}
              </>
            ) : (
              <>
                <S.MenuItem
                  index={6}
                  isOpenMenu={open}
                  //   link={LOGIN}
                  //   external={true}
                  onClick={handleLogin}
                  className="gtm_signin"
                  //   page={page}
                >
                  <S.LoginButton>{t<string>('landing.actions.login')}</S.LoginButton>
                </S.MenuItem>

                <S.MenuItem
                  index={7}
                  isOpenMenu={open}
                  //   link={REGISTER}
                  //   external={true}
                  onClick={handleRegister}
                  //   page={page}
                  //   forceActive
                >
                  <S.GoToActionButton onClick={handleRegister}>
                    {t<string>('landing.actions.register')}
                  </S.GoToActionButton>
                </S.MenuItem>
              </>
            )}
          </S.Menu>
        </S.MenuContainer>
      </S.MotionMenu>
    </div>
  );

  //   return portalRoot ? ReactDOM.createPortal(renderContent(), portalRoot) : null;
};

export default MobileMenu;
