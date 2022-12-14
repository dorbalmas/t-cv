import { Divider, IconButton, SwipeableDrawer, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { capitalize } from 'lodash';
import { useTranslation } from 'next-i18next';

import Avatar from '@/components/shared/Avatar';
import Footer from '@/components/shared/Footer';
import OpenCloseRightSidebar from '@/components/shared/OpenCloseRightSidebar';
import { rtlLanguages } from '@/config/languages';
import { right } from '@/config/sections';
import { setSidebarState } from '@/store/build/buildSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import styles from './RightSidebar.module.scss';

const RightSidebar = () => {
  const theme = useTheme();

  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { open } = useAppSelector((state) => state.build.sidebar.right);

  const handleOpen = () => dispatch(setSidebarState({ sidebar: 'right', state: { open: true } }));

  const handleClose = () => dispatch(setSidebarState({ sidebar: 'right', state: { open: false } }));

  const handleClick = (id: string) => {
    const section = document.querySelector(`#${id}`);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <SwipeableDrawer
      open={open}
      anchor={rtlLanguages.includes(i18n.language) ? 'left' : 'right'}
      onOpen={handleOpen}
      onClose={handleClose}
      PaperProps={{ className: '!shadow-lg' }}
      variant={isDesktop ? 'persistent' : 'temporary'}
      sx={{ '.MuiPaper-root': { overflowY: 'visible', border: 'none' } }}
    >
      <div className={styles.container} dir={rtlLanguages.includes(i18n.language) ? 'rtl' : 'ltr'}>
        <nav className={rtlLanguages.includes(i18n.language) ? 'left-0' : 'right-0'}>
          <div>
            <Avatar size={40} />
            <Divider />
          </div>

          <div className={styles.sections}>
            {right.map(({ id, icon }) => (
              <Tooltip
                key={id}
                arrow
                placement="right"
                title={t<string>(`builder.rightSidebar.sections.${id}.heading`, { defaultValue: capitalize(id) })}
              >
                <IconButton onClick={() => handleClick(id)}>{icon}</IconButton>
              </Tooltip>
            ))}
          </div>

          <div />
        </nav>

        <main
          className={
            rtlLanguages.includes(i18n.language) ? 'left-12 right-0 md:left-16' : 'right-12 left-0 md:right-16'
          }
        >
          {right.map(({ id, component }) => (
            <section key={id} id={id}>
              {component}
            </section>
          ))}

          <footer className={styles.footer}>
            <Footer />

            {/* <div>v{process.env.appVersion}</div> */}
          </footer>
        </main>
        <OpenCloseRightSidebar />
      </div>
    </SwipeableDrawer>
  );
};

export default RightSidebar;
