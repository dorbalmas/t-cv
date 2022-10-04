import { css } from '@emotion/css';
import { Theme } from '@reactive-resume/schema';
import clsx from 'clsx';
import get from 'lodash/get';
import { useMemo } from 'react';

import { useAppSelector } from '@/store/hooks';
import { getContrastColor } from '@/utils/styles';
import { PageProps } from '@/utils/template';

import { getSectionById } from '../sectionMap';
import styles from './Castform.module.scss';
import { MastheadMain, MastheadSidebar } from './widgets/Masthead';
import Section from './widgets/Section';

const Castform: React.FC<PageProps> = ({ page }) => {
  const isFirstPage = useMemo(() => page === 0, [page]);

  const layout: string[][] = useAppSelector((state) => state.resume.metadata.layout[page]);
  const theme: Theme = useAppSelector((state) => get(state.resume, 'metadata.theme', {}));

  const contrast = useMemo(() => getContrastColor(theme.primary), [theme.primary]);
  const color = useMemo(() => (contrast === 'dark' ? theme.text : theme.background), [theme, contrast]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div
          className={clsx(
            styles.sidebar,
            !theme.isGradient
              ? css(`svg { color: ${color} } --primary-color: ${color}`)
              : css(`svg { color: ${color} } --primary-color: ${color} background: ${theme.primary};
		  background: linear-gradient(180deg, ${theme.primary} 0%, ${theme.gradient} 100%);
		  background: -moz-linear-gradient(180deg, ${theme.primary} 0%, ${theme.gradient} 100%);
		  background: -webkit-linear-gradient(270deg, ${theme.primary} 0%, ${theme.gradient} 100%);`)
          )}
          style={{ color, backgroundColor: theme.primary }}
        >
          {isFirstPage && <MastheadSidebar />}

          <div className={styles.inner}>{layout[1].map((key) => getSectionById(key, Section))}</div>
        </div>
        <div className={styles.main}>
          <div className={styles.firstPage}>{isFirstPage && <MastheadMain />}</div>

          <div className={styles.inner}>{layout[0].map((key) => getSectionById(key, Section))}</div>
        </div>
      </div>
    </div>
  );
};

export default Castform;
