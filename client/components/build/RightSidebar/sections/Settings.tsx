import { Anchor, DeleteForever, Grade, Palette } from '@mui/icons-material';
import {
  Autocomplete,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
  TextField,
} from '@mui/material';
import { DateConfig, Resume } from '@reactive-resume/schema';
import dayjs from 'dayjs';
import get from 'lodash/get';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';
import { useMutation } from 'react-query';

import ThemeSwitch from '@/components/shared/ThemeSwitch';
import { Language, languageMap, languages, rtlLanguages } from '@/config/languages';
import sections from '@/config/sections';
import { ServerError } from '@/services/axios';
import queryClient from '@/services/react-query';
import { loadSampleData, LoadSampleDataParams, resetResume, ResetResumeParams } from '@/services/resume';
import { setTheme, togglePageBreakLine, togglePageOrientation } from '@/store/build/buildSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setResumeState } from '@/store/resume/resumeSlice';
import { dateFormatOptions } from '@/utils/date';

const Settings = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  const { locale, ...router } = useRouter();

  const [confirmReset, setConfirmReset] = useState(false);

  const resume = useAppSelector((state) => state.resume.present);
  const theme = useAppSelector((state) => state.build.theme);
  const pages = useAppSelector((state) => state.resume.present.metadata.layout);
  const breakLine = useAppSelector((state) => state.build.page.breakLine);
  const orientation = useAppSelector((state) => state.build.page.orientation);

  const id: number = useMemo(() => get(resume, 'id'), [resume]);
  const slug: string = useMemo(() => get(resume, 'slug'), [resume]);
  const username: string = useMemo(() => get(resume, 'user.username'), [resume]);
  const dateConfig: DateConfig = useMemo(() => get(resume, 'metadata.date'), [resume]);

  const name = t<string>('builder.rightSidebar.sections.settings.heading');
  const path = 'metadata.settings';
  const idPath = useMemo(() => path.split('.')[1], [path]);
  const icon = sections.find((x) => x.id === idPath)?.icon || <Grade />;
  const heading = useAppSelector((state) => get(state.resume.present, `${path}.name`, name));

  const isDarkMode = useMemo(() => theme === 'dark', [theme]);
  const exampleString = useMemo(() => `Eg. ${dayjs().utc().format(dateConfig.format)}`, [dateConfig.format]);
  const themeString = useMemo(() => (isDarkMode ? 'Matte Black Everything' : 'As bright as your future'), [isDarkMode]);

  const { mutateAsync: loadSampleDataMutation } = useMutation<Resume, ServerError, LoadSampleDataParams>(
    loadSampleData
  );
  const { mutateAsync: resetResumeMutation } = useMutation<Resume, ServerError, ResetResumeParams>(resetResume);

  const handleSetTheme = (value: boolean) => dispatch(setTheme({ theme: value ? 'dark' : 'light' }));

  const handleChangeDateFormat = (value: string | null) =>
    dispatch(setResumeState({ path: 'metadata.date.format', value }));

  const handleChangeLanguage = (value: Language | null) => {
    const { pathname, asPath, query, push } = router;
    const code = value?.code || 'en';

    document.cookie = `NEXT_LOCALE=${code}; path=/; expires=2147483647`;
    dispatch(setResumeState({ path: 'metadata.locale', value: code }));

    push({ pathname, query }, asPath, { locale: code });
  };

  const handleLoadSampleData = async () => {
    await loadSampleDataMutation({ id });

    queryClient.invalidateQueries(`resume/${username}/${slug}`);
  };

  const handleResetResume = async () => {
    if (!confirmReset) {
      return setConfirmReset(true);
    }

    await resetResumeMutation({ id });
    await queryClient.invalidateQueries(`resume/${username}/${slug}`);

    setConfirmReset(false);
  };

  return (
    <>
      {/* <Heading path="metadata.settings" name={t<string>('builder.rightSidebar.sections.settings.heading')} /> */}
      <div className="flex w-full items-center gap-3">
        <div className="opacity-50">{icon}</div>
        <h1 className="text-2xl">{heading}</h1>
      </div>

      <List sx={{ padding: 0 }}>
        {/* Global Settings */}
        <>
          <ListSubheader disableSticky className="rounded">
            {t<string>('builder.rightSidebar.sections.settings.global.heading')}
          </ListSubheader>

          <ListItem>
            <ListItemIcon>
              <Palette />
            </ListItemIcon>
            <ListItemText
              primary={t<string>('builder.rightSidebar.sections.settings.global.theme.primary')}
              secondary={themeString}
            />
            <ThemeSwitch checked={isDarkMode} onChange={(_, value: boolean) => handleSetTheme(value)} />
          </ListItem>

          <ListItem className="flex-col">
            <ListItemText
              className="w-full"
              primary={t<string>('builder.rightSidebar.sections.settings.global.date.primary')}
              secondary={t<string>('builder.rightSidebar.sections.settings.global.date.secondary')}
            />
            <Autocomplete<string, false, boolean, false>
              disableClearable
              className="my-2 w-full"
              sx={{
                '.MuiAutocomplete-endAdornment': {
                  right: rtlLanguages.includes(i18n.language) ? 'inherit' : '7px',
                  left: rtlLanguages.includes(i18n.language) ? '10px' : 'inherit',
                },
                '.MuiOutlinedInput-root': {
                  paddingRight: '14px !important',
                },
              }}
              options={dateFormatOptions}
              value={dateConfig.format}
              onChange={(_, value) => handleChangeDateFormat(value)}
              renderInput={(params) => <TextField {...params} helperText={exampleString} />}
            />
          </ListItem>

          <ListItem className="flex-col">
            <ListItemText
              className="w-full"
              primary={t<string>('builder.rightSidebar.sections.settings.global.language.primary')}
              secondary={t<string>('builder.rightSidebar.sections.settings.global.language.secondary')}
            />
            <Autocomplete<Language, false, boolean, false>
              disableClearable
              className="my-2 w-full"
              sx={{
                '.MuiAutocomplete-endAdornment': {
                  right: rtlLanguages.includes(i18n.language) ? 'inherit' : '7px',
                  left: rtlLanguages.includes(i18n.language) ? '10px' : 'inherit',
                },
                '.MuiOutlinedInput-root': {
                  paddingRight: '14px !important',
                },
              }}
              options={languages}
              value={languageMap[locale ?? 'en']}
              isOptionEqualToValue={(a, b) => a.code === b.code}
              onChange={(_, value) => handleChangeLanguage(value)}
              renderInput={(params) => <TextField {...params} />}
              getOptionLabel={(language) => {
                if (language.localName) {
                  return `${language.name} (${language.localName})`;
                }

                return language.name;
              }}
            />
          </ListItem>
        </>

        {/* Page Settings */}
        <>
          <ListSubheader disableSticky className="rounded">
            {t<string>('builder.rightSidebar.sections.settings.page.heading')}
          </ListSubheader>

          <ListItem>
            <ListItemText
              primary={t<string>('builder.rightSidebar.sections.settings.page.orientation.primary')}
              secondary={
                pages.length === 1
                  ? t<string>('builder.rightSidebar.sections.settings.page.orientation.disabled')
                  : t<string>('builder.rightSidebar.sections.settings.page.orientation.secondary')
              }
            />
            <Switch
              color="info"
              disabled={pages.length === 1}
              checked={orientation === 'horizontal'}
              onChange={() => dispatch(togglePageOrientation())}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary={t<string>('builder.rightSidebar.sections.settings.page.break-line.primary')}
              secondary={t<string>('builder.rightSidebar.sections.settings.page.break-line.secondary')}
            />
            <Switch color="info" checked={breakLine} onChange={() => dispatch(togglePageBreakLine())} />
          </ListItem>
        </>

        {/* Resume Settings */}
        <>
          <ListSubheader disableSticky className="rounded">
            {t<string>('builder.rightSidebar.sections.settings.resume.heading')}
          </ListSubheader>

          <ListItem>
            <ListItemButton onClick={handleLoadSampleData}>
              <ListItemIcon>
                <Anchor />
              </ListItemIcon>
              <ListItemText
                primary={t<string>('builder.rightSidebar.sections.settings.resume.sample.primary')}
                secondary={t<string>('builder.rightSidebar.sections.settings.resume.sample.secondary')}
              />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton onClick={handleResetResume}>
              <ListItemIcon>
                <DeleteForever />
              </ListItemIcon>
              <ListItemText
                primary={
                  confirmReset
                    ? 'Are you sure?'
                    : t<string>('builder.rightSidebar.sections.settings.resume.reset.primary')
                }
                secondary={t<string>('builder.rightSidebar.sections.settings.resume.reset.secondary')}
              />
            </ListItemButton>
          </ListItem>
        </>
      </List>
    </>
  );
};

export default Settings;
