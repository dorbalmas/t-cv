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
import React, {
  useCallback,
  //  useRef,
  useState,
} from 'react';

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
              onClick={closeMenu}
              index={0}
              isOpenMenu={open}
              //   submenuList={productSubmenu}
              className="gtm_product"
              //   page={page}
            >
              <Link href={'#Home'}>Home</Link>
            </S.MenuItem>
            <S.MenuItem
              index={2}
              isOpenMenu={open}
              //   link={INTEGRATIONS}
              onClick={closeMenu}
              className="gtm_integrations"
              //   page={page}
            >
              <Link href={'#Features'}>Features</Link>
            </S.MenuItem>
            <S.MenuItem
              index={1}
              isOpenMenu={open}
              //   link={OPEN_SOURCE}
              //   submenuList={developersMenu}
              onClick={closeMenu}
              className="gtm_developers"
              //   page={page}
            >
              <Link href={'#Pricing'}>Pricing</Link>
            </S.MenuItem>
            <S.MenuItem
              index={1}
              isOpenMenu={open}
              //   link={OPEN_SOURCE}
              //   submenuList={developersMenu}
              onClick={closeMenu}
              className="gtm_developers"
              //   page={page}
            >
              <Link href={'#Pricing'}>Pricing</Link>
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
            <S.MenuItem
              index={6}
              isOpenMenu={open}
              //   link={LOGIN}
              //   external={true}
              onClick={closeMenu}
              className="gtm_signin"
              //   page={page}
            >
              Login
            </S.MenuItem>
            <S.MenuItem
              index={7}
              isOpenMenu={open}
              //   link={REGISTER}
              //   external={true}
              onClick={closeMenu}
              //   page={page}
              //   forceActive
            >
              Sign up
            </S.MenuItem>
          </S.Menu>
        </S.MenuContainer>
      </S.MotionMenu>
    </div>
  );

  //   return portalRoot ? ReactDOM.createPortal(renderContent(), portalRoot) : null;
};

export default MobileMenu;
