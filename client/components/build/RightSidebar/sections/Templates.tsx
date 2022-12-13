import { Grade } from '@mui/icons-material';
import { ButtonBase } from '@mui/material';
import clsx from 'clsx';
import get from 'lodash/get';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import sections from '@/config/sections';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setResumeState } from '@/store/resume/resumeSlice';
import templateMap, { TemplateMeta } from '@/templates/templateMap';

import styles from './Templates.module.scss';

const Templates = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const name = t<string>('builder.rightSidebar.sections.templates.heading');
  const path = 'metadata.templates';
  const id = useMemo(() => path.split('.')[1], [path]);
  const icon = sections.find((x) => x.id === id)?.icon || <Grade />;
  const heading = useAppSelector((state) => get(state.resume.present, `${path}.name`, name));

  const currentTemplate: string = useAppSelector((state) => get(state.resume.present, 'metadata.template'));

  const handleChange = (template: TemplateMeta) => {
    dispatch(setResumeState({ path: 'metadata.template', value: template.id }));
  };

  return (
    <>
      <div className="flex w-full items-center gap-3">
        <div className="opacity-50">{icon}</div>
        <h1 className="text-2xl">{heading}</h1>
      </div>

      <div className={styles.container}>
        {Object.values(templateMap).map((template) => (
          <div key={template.id} className={styles.template}>
            <div className={clsx(styles.preview, { [styles.selected]: template.id === currentTemplate })}>
              <ButtonBase onClick={() => handleChange(template)}>
                <Image src={template.preview} alt={template.name} className="rounded-sm" layout="fill" />
              </ButtonBase>
            </div>

            {/* <p className={styles.label}>{template.name}</p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Templates;
