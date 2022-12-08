import { Close as CloseIcon } from '@mui/icons-material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {
  ClickAwayListener,
  Divider,
  IconButton,
  InputAdornment,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Zoom,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import { rtlLanguages } from '@/config/languages';

import { useBreakpoints } from '../landingPage/hooks/useBreakpoints';
import AddResume from '../tips/AddResume';
import Profiles from '../tips/Profiles';
import Summary from '../tips/Summary';
import Website from '../tips/Website';
import styles from './Tips.module.scss';

type Props = {
  tipsTitle: string;
  top?: string;
  children?: React.ReactNode;
};
const Tips: React.FC<Props> = ({ tipsTitle, children, top }) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const { isMobile } = useBreakpoints();

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(!open);
  };
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => {
    return (
      <Tooltip
        {...props}
        TransitionComponent={Zoom}
        classes={{ popper: className }}
        // PopperProps={{
        //   disablePortal: true,
        // }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      />
    );
  })(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#36BBF7',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#36BBF7',
      //   color: '#36BBF7',
      maxWidth: isMobile ? null : 400,
      filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, .5))',
      //   fontSize: theme.typography.pxToRem(12),
    },
  }));

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div className=" relative grid gap-2 w-full sm:col-span-2">
        {children}
        <span
          className={
            rtlLanguages.includes(i18n.language)
              ? `absolute ${tipsTitle === 'addResume' ? 'right-0' : 'left-0'} z-10`
              : `absolute right-0 z-10`
          }
          style={{ top: top ? top : '0.75rem' }}
        >
          <HtmlTooltip
            arrow
            placement={
              rtlLanguages.includes(i18n.language)
                ? isMobile
                  ? `${tipsTitle === 'summary' ? 'bottom' : 'top'}-start`
                  : 'left'
                : isMobile
                ? `${tipsTitle === 'summary' ? 'bottom' : 'top'}-end`
                : 'right'
            }
            // placement={
            //   rtlLanguages.includes(i18n.language)
            //     ? isMobile
            //       ? `${tipsTitle === 'summary' ? 'bottom' : 'top'}-start`
            //       : 'left'
            //     : isMobile
            //     ? `${tipsTitle === 'summary' ? 'bottom' : 'top'}-end`
            //     : 'right'
            // }
            title={
              <div
                dir={rtlLanguages.includes(i18n.language) ? 'rtl' : 'ltr'}
                className="mx-auto pb-2 prose prose-invert text-neutral-50 text-sm mt-0"
              >
                <header className={styles.header}>
                  <div>
                    <h3>{t<string>('builder.tips.header')}</h3>
                  </div>
                  <IconButton size="small" onClick={handleTooltipClose}>
                    <CloseIcon sx={{ fontSize: 24, color: 'white' }} />
                  </IconButton>
                </header>
                <Divider style={{ marginBottom: '0.7rem' }} />
                {tipsTitle === 'website' ? <Website /> : null}
                {tipsTitle === 'summary' ? <Summary /> : null}
                {tipsTitle === 'addResume' ? <AddResume /> : null}
                {tipsTitle === 'profiles' ? <Profiles /> : null}
              </div>
            }
          >
            <InputAdornment position="start">
              <IconButton edge="end" disableRipple style={{ color: '#36BBF7' }} onClick={handleTooltipOpen}>
                {tipsTitle === 'addResume' ? (
                  <span className="text-lg font-semibold tracking-wide	">
                    {t<string>('builder.tips.iconText')}&nbsp;
                  </span>
                ) : (
                  ''
                )}
                <TipsAndUpdatesIcon htmlColor="#36BBF7" fontSize={tipsTitle === 'addResume' ? 'large' : 'small'} />
              </IconButton>
            </InputAdornment>
          </HtmlTooltip>
        </span>
      </div>
    </ClickAwayListener>
  );
};

export default Tips;
