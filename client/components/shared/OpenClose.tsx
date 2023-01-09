import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { useTranslation } from 'next-i18next';

import { rtlLanguages } from '@/config/languages';
import { toggleSidebar } from '@/store/build/buildSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import styles from './OpenClose.module.scss';
type Props = {
  openDir?: string;
};
const OpenClose: React.FC<Props> = ({ openDir }) => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const { left: leftSideBar, right: rightSideBar } = useAppSelector((state) => state.build.sidebar);

  const toggleLeftSidebar = () => dispatch(toggleSidebar({ sidebar: 'left' }));

  //   const toggleRightSidebar = () => dispatch(toggleSidebar({ sidebar: 'right' }));

  return (
    <span
      style={
        openDir
          ? {
              direction: rtlLanguages.includes(i18n.language) ? 'rtl' : 'ltr',
              [openDir]: '-0.1rem',
              transform: rtlLanguages.includes(i18n.language) ? 'rotate(180deg)' : 'rotate(0deg)',
              zIndex: 99999,
              display: leftSideBar.open ? 'none' : 'inline',
            }
          : {
              [rtlLanguages.includes(i18n.language) ? 'left' : 'right']: '-0.8rem',
              transform: rtlLanguages.includes(i18n.language) ? 'rotate(180deg)' : 'rotate(0deg)',
            }
      }
      className={styles.container}
    >
      <button onClick={toggleLeftSidebar}>
        <span
          className="absolute z-50"
          style={{
            top: '40%',
            right: '-0.1rem',
          }}
        >
          {rtlLanguages.includes(i18n.language) ? (
            leftSideBar.open ? (
              <ChevronLeftIcon fontSize="small" />
            ) : (
              <ChevronRightIcon fontSize="small" />
            )
          ) : openDir === 'left' ? (
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

export default OpenClose;
