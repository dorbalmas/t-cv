import { Grade } from '@mui/icons-material';
import { List, ListItem, ListItemText, Switch } from '@mui/material';
import { Theme as ThemeType } from '@reactive-resume/schema';
import get from 'lodash/get';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import ColorAvatar from '@/components/shared/ColorAvatar';
import ColorPicker from '@/components/shared/ColorPicker';
import { colorOptions } from '@/config/colors';
import sections from '@/config/sections';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setResumeState } from '@/store/resume/resumeSlice';

import styles from './Theme.module.scss';

const Theme = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const name = t<string>('builder.rightSidebar.sections.theme.heading');
  const path = 'metadata.theme';
  const id = useMemo(() => path.split('.')[1], [path]);
  const icon = sections.find((x) => x.id === id)?.icon || <Grade />;
  const heading = useAppSelector((state) => get(state.resume.present, `${path}.name`, name));

  const { background, text, primary, gradient, isGradient } = useAppSelector<ThemeType>((state) =>
    get(state.resume.present, 'metadata.theme')
  );
  const templatesWithoutGradient = ['onyx', 'pikachu', 'gengar', 'kakuna', 'leafish'];
  const template = useAppSelector((state) => state.resume.present.metadata.template);

  const handleChange = (property: string, color: string) => {
    dispatch(setResumeState({ path: `metadata.theme.${property}`, value: color[0] !== '#' ? `#${color}` : color }));
  };
  const handleSetGradient = (value: boolean) => dispatch(setResumeState({ path: 'metadata.theme.isGradient', value }));

  return (
    <>
      <div className="flex w-full items-center gap-3">
        <div className="opacity-50">{icon}</div>
        <h1 className="text-2xl">{heading}</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.colorOptions}>
          {colorOptions.map((color) => (
            <ColorAvatar key={color} color={color} onClick={(color) => handleChange('primary', color)} />
          ))}
        </div>

        <ColorPicker
          label={t<string>('builder.rightSidebar.sections.theme.form.primary.label')}
          color={primary}
          className="col-span-2"
          onChange={(color) => handleChange('primary', color)}
        />

        <ColorPicker
          label={t<string>('builder.rightSidebar.sections.theme.form.background.label')}
          color={background}
          onChange={(color) => handleChange('background', color)}
        />
        <ColorPicker
          label={t<string>('builder.rightSidebar.sections.theme.form.text.label')}
          color={text}
          onChange={(color) => handleChange('text', color)}
        />
        <List sx={{ padding: 0 }} className="col-span-2">
          <ListItem className="flex flex-col" sx={{ padding: 0 }}>
            <div className="flex w-full items-center justify-between">
              <ListItemText
                primary={t<string>('builder.rightSidebar.sections.theme.gradient_visibility.title')}
                secondary={
                  templatesWithoutGradient.includes(template)
                    ? t<string>('builder.rightSidebar.sections.theme.gradient_visibility.disabled')
                    : t<string>('builder.rightSidebar.sections.theme.gradient_visibility.subtitle')
                }
              />
              <Switch
                disabled={templatesWithoutGradient.includes(template)}
                color="info"
                checked={isGradient}
                onChange={(_, value) => handleSetGradient(value)}
              />
            </div>
          </ListItem>
        </List>

        {isGradient && (
          <ColorPicker
            label={t<string>('builder.rightSidebar.sections.theme.form.gradient.label')}
            color={gradient}
            className="col-span-2"
            onChange={(color) => handleChange('gradient', color)}
          />
        )}
      </div>
    </>
  );
};

export default Theme;
