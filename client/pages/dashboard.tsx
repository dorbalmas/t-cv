import { Add } from '@mui/icons-material';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { ActionCreators } from 'redux-undo';

import ResumeCard from '@/components/dashboard/ResumeCard';
import ResumePreview from '@/components/dashboard/ResumePreview';
import Avatar from '@/components/shared/Avatar';
import Logo from '@/components/shared/Logo';
import { RESUMES_QUERY } from '@/constants/index';
import layered from '@/public/images/layered-waves-haikei.svg';
import layeredLight from '@/public/images/layered-waves-haikei-light.svg';
import { fetchResumes } from '@/services/resume';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import styles from '@/styles/pages/Dashboard.module.scss';
export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'modals', 'dashboard', 'builder'])),
    },
  };
};

const Dashboard: NextPage = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.build.theme);

  const { data } = useQuery(RESUMES_QUERY, fetchResumes);

  useEffect(() => {
    dispatch(ActionCreators.clearHistory());
  }, []);

  if (!data) return null;

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: theme === 'dark' ? `url(${layered.src})` : `url(${layeredLight.src})`,
      }}
    >
      <Head>
        <title>
          {t<string>('dashboard.title')} | {t<string>('common.title')}
        </title>
      </Head>

      <header>
        <Link href="/">
          <a>
            <Logo size={48} />
          </a>
        </Link>

        <Avatar size={40} />
      </header>

      <main className={styles.resumes}>
        <ResumeCard
          modal="dashboard.create-resume"
          icon={Add}
          title={t<string>('dashboard.create-resume.title')}
          subtitle={t<string>('dashboard.create-resume.subtitle')}
        />

        {/* <ResumeCard
          modal="dashboard.import-external"
          icon={ImportExport}
          title={t<string>('dashboard.import-external.title')}
          subtitle={t<string>('dashboard.import-external.subtitle')}
        /> */}

        {data.map((resume) => (
          <ResumePreview key={resume.id} resume={resume} />
        ))}
      </main>
    </div>
  );
};

export default Dashboard;
