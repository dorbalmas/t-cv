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

import Summary from '../tips/Summary';
import Website from '../tips/Website';
import styles from './Tips.module.scss';

type Props = {
  tipsTitle: string;
  children?: React.ReactNode;
};
const Tips: React.FC<Props> = ({ tipsTitle, children }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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
      //   maxWidth: 280,
      filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, .5))',
      //   fontSize: theme.typography.pxToRem(12),
    },
  }));

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div className=" relative grid gap-2 w-full sm:col-span-2">
        {children}
        <span className=" absolute top-3 right-0 z-10">
          <HtmlTooltip
            arrow
            placement="top-start"
            title={
              <div className="mx-auto pb-2 prose prose-invert text-neutral-50 mt-0">
                <header className={styles.header}>
                  <div>
                    <h3>{t<string>('builder.tips.header')}</h3>
                  </div>
                  <IconButton size="small" onClick={handleTooltipClose}>
                    <CloseIcon sx={{ fontSize: 24, color: 'white' }} />
                  </IconButton>
                </header>
                <Divider style={{ marginBottom: '0.7rem' }} />
                {tipsTitle === 'website' ? <Website /> : ''}
                {tipsTitle === 'summary' ? <Summary /> : ''}
              </div>
            }
          >
            <InputAdornment position="start">
              <IconButton edge="end" color="info" onClick={handleTooltipOpen}>
                <TipsAndUpdatesIcon htmlColor="#36BBF7" fontSize="small" />
              </IconButton>
            </InputAdornment>
          </HtmlTooltip>
        </span>
      </div>
    </ClickAwayListener>
  );
};

export default Tips;
