import { DarkMode, LightMode, Link as LinkIcon } from '@mui/icons-material';
import { Masonry } from '@mui/lab';
import { Button, IconButton, NoSsr } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect } from 'react';

import Testimony from '@/components/landing/Testimony';
import Layout from '@/components/landingPage/components/containers/Layout/Layout';
import FAQ from '@/components/landingPage/components/organisms/FAQ/FAQ';
import Footer from '@/components/landingPage/components/organisms/Footer/Footer';
import Header from '@/components/landingPage/components/organisms/Header/Header';
import PricingContent from '@/components/landingPage/components/organisms/PricingContent/PricingContent';
import { SectionMain } from '@/components/landingPage/components/organisms/SectionMain/SectionMain';
import { useBreakpoints } from '@/components/landingPage/hooks/useBreakpoints';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import Logo from '@/components/shared/Logo';
import { screenshots } from '@/config/screenshots';
import { FLAG_DISABLE_SIGNUPS } from '@/constants/flags';
import testimonials from '@/data/testimonials';
import { logout } from '@/store/auth/authSlice';
import { setTheme } from '@/store/build/buildSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';
import styles from '@/styles/pages/Home.module.scss';

import { DIGITALOCEAN_URL, DONATION_URL } from '../constants';

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'modals', 'landing', 'builder'])),
    },
  };
};
const Content = React.memo(({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) => {
  return (
    <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
      <div
        style={{
          minHeight: '100vh',
          // backgroundColor: defaultTheme.colors.white,
        }}
      >
        <SectionMain isMobile={isTablet || isMobile} />
      </div>
      {/* <SectionQuote />
	  
			  <SectionMap isMobile={isMobile} />
	  
			  <SectionShowcase isMobile={isMobile} />
	  
			  <SectionTechStack isMobile={isMobile} />
	  
			  <SectionLaunch isMobile={isMobile} />
	  
			  <SectionTrustedBy />*/}
      <PricingContent />
      <FAQ />

      <Footer isMobile={isMobile} />
    </div>
  );
});
Content.displayName = 'Content';
const Home: NextPage = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.build.theme);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => dispatch(setModalState({ modal: 'auth.login', state: { open: true } }));

  const handleRegister = () => dispatch(setModalState({ modal: 'auth.register', state: { open: true } }));

  const handleToggle = () => dispatch(setTheme({ theme: theme === 'light' ? 'dark' : 'light' }));

  const handleLogout = () => dispatch(logout());

  useEffect(() => {
    const tempTheme = theme;

    theme === 'dark' ? dispatch(setTheme({ theme: 'light' })) : '';

    return () => {
      dispatch(setTheme({ theme: tempTheme === 'light' ? 'light' : 'dark' }));
    };
  }, []);

  const sectionH = typeof window !== 'undefined' ? window.innerHeight * 2.3 : 2000;

  const { isMobile, isTablet, isDesktop } = useBreakpoints();
  return (
    <>
      <Layout>
        <Header isMobile={isMobile} isDesktop={isDesktop} isTablet={isTablet} customHeaderHeight={sectionH} />
        <Content isMobile={isMobile} isTablet={isTablet} />
      </Layout>
      <main className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Logo size={256} />
          </div>

          <div className={styles.main}>
            <h1>TivlotCV NEW</h1>

            <h2>{t<string>('common.subtitle')}</h2>

            <NoSsr>
              <div className={styles.buttonWrapper}>
                {isLoggedIn ? (
                  <>
                    <Link href="/dashboard" passHref>
                      <Button>{t<string>('landing.actions.app')}</Button>
                    </Link>

                    <Button variant="outlined" onClick={handleLogout}>
                      {t<string>('landing.actions.logout')}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button onClick={handleLogin}>{t<string>('landing.actions.login')}</Button>

                    <Button variant="outlined" onClick={handleRegister} disabled={FLAG_DISABLE_SIGNUPS}>
                      {t<string>('landing.actions.register')}
                    </Button>
                  </>
                )}
              </div>
            </NoSsr>
          </div>
        </div>

        <section className={styles.section}>
          <h6>{t<string>('landing.summary.heading')}</h6>

          <p>{t<string>('landing.summary.body')}</p>
        </section>

        <section className={styles.section}>
          <h6>{t<string>('landing.features.heading')}</h6>

          <ul className="list-inside list-disc leading-loose">
            <li>{t<string>('landing.features.list.free')}</li>
            <li>{t<string>('landing.features.list.ads')}</li>
            <li>{t<string>('landing.features.list.tracking')}</li>
            <li>{t<string>('landing.features.list.languages')}</li>
            <li>{t<string>('landing.features.list.import')}</li>
            <li>{t<string>('landing.features.list.export')}</li>
            <li>
              <Trans t={t} i18nKey="landing.features.list.more">
                And a lot of exciting features,
              </Trans>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h6>{t<string>('landing.screenshots.heading')}</h6>

          <div className={styles.screenshots}>
            {screenshots.map(({ src, alt }) => (
              <a key={src} href={src} className={styles.image} target="_blank" rel="noreferrer">
                <Image src={src} alt={alt} layout="fill" objectFit="cover" />
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h6>{t<string>('landing.testimonials.heading')}</h6>

          <p className="my-3">
            <Trans t={t} i18nKey="landing.testimonials.body">
              Good or bad, I would love to hear your opinion on TivlotCV and how the experience has been for you.
              <br />
              Here are some of the messages sent in by users across the world.
            </Trans>
          </p>

          <p className="my-3">
            <Trans t={t} i18nKey="landing.testimonials.contact">
              You can reach out to me through <a href="mailto:tivlotcv@gmail.com">my email</a> or through the contact
              form on <a href="https://dorbellmas.com">my website</a>.
            </Trans>
          </p>

          <Masonry columns={{ xs: 1, sm: 2, lg: 4 }} spacing={2}>
            {testimonials.map(({ name, message }, index) => (
              <Testimony key={index} name={name} message={message} />
            ))}
          </Masonry>
        </section>

        <section className={styles.section}>
          <h6>{t<string>('landing.links.heading')}</h6>

          <div>
            <Link href="/meta/privacy" passHref>
              <Button variant="text" startIcon={<LinkIcon />}>
                {t<string>('landing.links.links.privacy')}
              </Button>
            </Link>

            <Link href="/meta/service" passHref>
              <Button variant="text" startIcon={<LinkIcon />}>
                {t<string>('landing.links.links.service')}
              </Button>
            </Link>

            <a href={DONATION_URL} target="_blank" rel="noreferrer">
              <Button variant="text" startIcon={<LinkIcon />}>
                {t<string>('landing.links.links.donate')}
              </Button>
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <a href={DIGITALOCEAN_URL} target="_blank" rel="noreferrer">
            <Image src="/images/sponsors/digitalocean.svg" alt="Powered By DigitalOcean" width={200} height={40} />
          </a>
        </section>

        <footer>
          <div className={styles.version}>
            {/* <Footer className="font-semibold leading-5 opacity-50" /> */}

            <div>v{process.env.appVersion}</div>
          </div>

          <div className={styles.actions}>
            <IconButton onClick={handleToggle}>{theme === 'dark' ? <DarkMode /> : <LightMode />}</IconButton>

            <LanguageSwitcher />
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
