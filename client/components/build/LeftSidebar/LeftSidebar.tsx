import { Add, Star } from '@mui/icons-material';
import { Button, IconButton, SwipeableDrawer, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { Section as SectionRecord } from '@reactive-resume/schema';
import get from 'lodash/get';
import Img from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { validate } from 'uuid';

import { rtlLanguages } from '@/config/languages';
import { getCustomSections, left } from '@/config/sections';
import paperDark from '@/public/images/paperDark.png';
import paperLight from '@/public/images/paperLight.png';
import { setSidebarState } from '@/store/build/buildSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addSection } from '@/store/resume/resumeSlice';

import styles from './LeftSidebar.module.scss';
import Section from './sections/Section';

const LeftSidebar = () => {
  const theme = useTheme();

  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const sections = useAppSelector((state) => state.resume.present.sections);
  const { open } = useAppSelector((state) => state.build.sidebar.left);

  const customSections = useMemo(() => getCustomSections(sections), [sections]);

  const handleOpen = () => dispatch(setSidebarState({ sidebar: 'left', state: { open: true } }));

  const handleClose = () => dispatch(setSidebarState({ sidebar: 'left', state: { open: false } }));

  const handleClick = (id: string) => {
    const elementId = validate(id) ? `#section-${id}` : `#${id}`;
    const section = document.querySelector(elementId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAddSection = () => {
    const newSection: SectionRecord = {
      name: 'Custom Section',
      type: 'custom',
      visible: true,
      columns: 2,
      items: [],
    };

    dispatch(addSection({ value: newSection }));
  };

  return (
    <SwipeableDrawer
      open={open}
      anchor={rtlLanguages.includes(i18n.language) ? 'right' : 'left'}
      onOpen={handleOpen}
      onClose={handleClose}
      PaperProps={{ className: '!shadow-lg' }}
      variant={isDesktop ? 'persistent' : 'temporary'}
    >
      <div className={styles.container} dir={rtlLanguages.includes(i18n.language) ? 'rtl' : 'ltr'}>
        <nav className={rtlLanguages.includes(i18n.language) ? 'right-0' : 'left-0'}>
          <div>
            <Link href="/dashboard">
              <IconButton>
                {theme.palette.mode === 'dark' ? <Img src={paperDark} /> : <Img src={paperLight} />}
              </IconButton>
            </Link>
          </div>

          <div className={styles.sections}>
            {left.map(({ id, icon }) => (
              <Tooltip
                arrow
                key={id}
                placement="right"
                title={t<string>(`builder.leftSidebar.sections.${id}.heading`) as string}
              >
                <IconButton onClick={() => handleClick(id)}>{icon}</IconButton>
              </Tooltip>
            ))}

            {customSections.map(({ id }) => (
              <Tooltip key={id} title={get(sections, `${id}.name`, '') as string} placement="right" arrow>
                <IconButton onClick={() => handleClick(id)}>
                  <Star />
                </IconButton>
              </Tooltip>
            ))}
          </div>

          <div />
        </nav>

        <main
          className={
            rtlLanguages.includes(i18n.language) ? 'right-12 left-0 md:right-16' : 'left-12 right-0 md:left-16'
          }
        >
          {left.map(({ id, component }) => (
            <section key={id} id={id}>
              {component}
            </section>
          ))}

          {customSections.map(({ id }) => (
            <section key={id} id={`section-${id}`}>
              <Section path={`sections.${id}`} isEditable isHideable isDeletable />
            </section>
          ))}

          <div className="py-6 text-right">
            <Button fullWidth variant="outlined" startIcon={<Add />} onClick={handleAddSection}>
              <span className="rtl:mr-2">
                {t<string>('builder.common.actions.add') +
                  ' ' +
                  t<string>('builder.leftSidebar.sections.section.heading_one')}
              </span>
            </Button>
          </div>
        </main>
      </div>
    </SwipeableDrawer>
  );
};

export default LeftSidebar;
