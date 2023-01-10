import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { useTranslation } from 'next-i18next';

import { rtlLanguages } from '@/config/languages';
import { toggleSidebar } from '@/store/build/buildSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { useBreakpoints } from '../landingPage/hooks/useBreakpoints';
import styles from './OpenCloseLeftSidebar.module.scss';
type Props = {
  openDir?: string;
};
const OpenCloseRightSidebar: React.FC<Props> = ({ openDir }) => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const { isMobile } = useBreakpoints();

  const { right: rightSideBar, left: leftSideBar } = useAppSelector((state) => state.build.sidebar);

  const toggleRightSidebar = () => dispatch(toggleSidebar({ sidebar: 'right' }));

  return (
    <span
      style={
        openDir
          ? {
              direction: rtlLanguages.includes(i18n.language) ? 'rtl' : 'ltr',
              [openDir]: '-0.1rem',
              transform: rtlLanguages.includes(i18n.language) ? 'rotate(0deg)' : 'rotate(180deg)',
              zIndex: 9999,
              display: rightSideBar.open || (isMobile && leftSideBar.open) ? 'none' : 'inline',
            }
          : {
              [rtlLanguages.includes(i18n.language) ? 'right' : 'left']: '-0.8rem',
              transform: rtlLanguages.includes(i18n.language) ? 'rotate(0deg)' : 'rotate(180deg)',
            }
      }
      className={styles.container}
    >
      <button onClick={toggleRightSidebar}>
        <span
          className="absolute z-50"
          style={{
            top: '40%',
            right: '-0.1rem',
          }}
        >
          {rtlLanguages.includes(i18n.language) ? (
            rightSideBar.open ? (
              <ChevronLeftIcon fontSize="small" />
            ) : (
              <ChevronRightIcon fontSize="small" />
            )
          ) : openDir === 'right' ? (
            <ChevronRightIcon fontSize="small" />
          ) : (
            <ChevronLeftIcon fontSize="small" />
          )}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 96"
          width="16"
          height="96"
          fill="none"
          className="scale-125"
        >
          <path
            className="stroke-neutral-50 dark:stroke-neutral-900 fill-neutral-50 dark:fill-slate-900 stroke-2"
            d="M0 0h3c0 20 12 12 12 32v32c0 20-12 12-12 32H0z"
          ></path>
          <path className="fill-neutral-50 dark:fill-slate-900 " d="M2.5 0c0 20 12 12 12 32v32c0 20-12 12-12 32"></path>
        </svg>
      </button>
    </span>
  );
};

export default OpenCloseRightSidebar;
