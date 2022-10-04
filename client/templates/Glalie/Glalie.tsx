import { css } from '@emotion/css';
import { alpha } from '@mui/material';
import { Theme } from '@reactive-resume/schema';
import clsx from 'clsx';
import get from 'lodash/get';
import { useMemo } from 'react';

import { useAppSelector } from '@/store/hooks';
import { PageProps } from '@/utils/template';

import { getSectionById } from '../sectionMap';
import styles from './Glalie.module.scss';
import { MastheadMain, MastheadSidebar } from './widgets/Masthead';
import Section from './widgets/Section';

const Glalie: React.FC<PageProps> = ({ page }) => {
  const isFirstPage = useMemo(() => page === 0, [page]);
  const theme: Theme = useAppSelector((state) => get(state.resume, 'metadata.theme', {}));

  const layout: string[][] = useAppSelector((state) => state.resume.metadata.layout[page]);
  const primaryColor: string = useAppSelector((state) => get(state.resume, 'metadata.theme.primary'));

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div
          className={clsx(
            styles.sidebar,
            !theme.isGradient
              ? ''
              : css(` background: ${theme.primary};
		  background: linear-gradient(180deg, ${theme.primary} 0%, ${theme.gradient} 100%);
		  background: -moz-linear-gradient(180deg, ${theme.primary} 0%, ${theme.gradient} 100%);
		  background: -webkit-linear-gradient(270deg, ${theme.primary} 0%, ${theme.gradient} 100%);`)
          )}
          style={{ backgroundColor: alpha(primaryColor, 0.15) }}
        >
          {isFirstPage && <MastheadSidebar />}

          {layout[1].map((key) => getSectionById(key, Section))}
        </div>
        <div className={styles.main}>
          {isFirstPage && <MastheadMain />}

          {layout[0].map((key) => getSectionById(key, Section))}
        </div>
      </div>
    </div>
  );
};

export default Glalie;
