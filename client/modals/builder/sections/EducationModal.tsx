import { joiResolver } from '@hookform/resolvers/joi';
import { Add, DriveFileRenameOutline } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Education, SectionPath } from '@reactive-resume/schema';
import dayjs from 'dayjs';
import Joi from 'joi';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import ArrayInput from '@/components/shared/ArrayInput';
import BaseModal from '@/components/shared/BaseModal';
import Tips from '@/components/shared/Tips';
import { VALID_URL_REGEX } from '@/constants/index';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';
import { addItem, editItem } from '@/store/resume/resumeSlice';

type FormData = Education;

const path: SectionPath = 'sections.education';

const defaultState: FormData = {
  institution: '',
  degree: '',
  area: '',
  date: {
    start: '',
    end: '',
  },
  url: '',
  summary: '',
  courses: [],
};

const schema = Joi.object<FormData>().keys({
  id: Joi.string(),
  institution: Joi.string().required(),
  degree: Joi.string().required(),
  area: Joi.string().allow(''),
  date: Joi.object().keys({
    start: Joi.string().allow(''),
    end: Joi.string().allow(''),
  }),
  url: Joi.string().pattern(VALID_URL_REGEX, { name: 'valid URL' }).allow(''),
  summary: Joi.string().allow(''),
  courses: Joi.array().items(Joi.string().optional()),
});

const EducationModal: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const heading = t<string>('builder.leftSidebar.sections.education.heading_one');

  const { open: isOpen, payload } = useAppSelector((state) => state.modal[`builder.${path}`]);

  const item: FormData = get(payload, 'item', null);
  const isEditMode = useMemo(() => !!item, [item]);

  const addText = useMemo(() => t<string>('builder.common.actions.add') + ' ' + heading, [heading, t]);
  const editText = useMemo(() => t<string>('builder.common.actions.edit') + ' ' + heading, [heading, t]);

  const { reset, control, handleSubmit } = useForm<FormData>({
    defaultValues: defaultState,
    resolver: joiResolver(schema),
  });

  const onSubmit = (formData: FormData) => {
    if (isEditMode) {
      dispatch(editItem({ path: `${path}.items`, value: formData }));
    } else {
      dispatch(addItem({ path: `${path}.items`, value: formData }));
    }

    handleClose();
  };

  const handleClose = () => {
    dispatch(
      setModalState({
        modal: `builder.${path}`,
        state: { open: false },
      })
    );

    reset(defaultState);
  };

  useEffect(() => {
    if (!isEmpty(item)) {
      reset(item);
    }
  }, [item, reset]);

  return (
    <BaseModal
      icon={isEditMode ? <DriveFileRenameOutline /> : <Add />}
      isOpen={isOpen}
      handleClose={handleClose}
      heading={isEditMode ? editText : addText}
      footerChildren={
        <Button id="button" onClick={handleSubmit(onSubmit)}>
          {isEditMode ? editText : addText}
        </Button>
      }
    >
      <Tips tipsTitle="education" top="-0.5rem">
        <form className="my-2 grid grid-cols-2 gap-4">
          <Controller
            name="institution"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                required
                autoFocus
                label={t<string>('builder.leftSidebar.sections.education.form.institution.label')}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="degree"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                required
                label={t<string>('builder.leftSidebar.sections.education.form.degree.label')}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="area"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                label={t<string>('builder.leftSidebar.sections.education.form.area-study.label')}
                className="col-span-2 place-self-center w-60"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="date.start"
            control={control}
            render={({ field, fieldState }) => (
              <DatePicker
                {...field}
                openTo="year"
                label={t<string>('builder.common.form.start-date.label')}
                views={['year', 'month', 'day']}
                onChange={(date: Date | null, keyboardInputValue: string | undefined) => {
                  isEmpty(keyboardInputValue) && field.onChange('');
                  date && dayjs(date).utc().isValid() && field.onChange(dayjs(date).utc().toISOString());
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || params.inputProps?.placeholder}
                  />
                )}
              />
            )}
          />

          <Controller
            name="date.end"
            control={control}
            render={({ field, fieldState }) => (
              <DatePicker
                {...field}
                openTo="year"
                label={t<string>('builder.common.form.end-date.label')}
                views={['year', 'month', 'day']}
                onChange={(date: Date | null, keyboardInputValue: string | undefined) => {
                  isEmpty(keyboardInputValue) && field.onChange('');
                  date && dayjs(date).utc().isValid() && field.onChange(dayjs(date).utc().toISOString());
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || t<string>('builder.common.form.end-date.help-text')}
                  />
                )}
              />
            )}
          />

          <Controller
            name="url"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                label={t<string>('builder.common.form.url.label')}
                placeholder="https://"
                className="col-span-2"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="summary"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                multiline
                minRows={3}
                maxRows={6}
                label={t<string>('builder.common.form.description.label')}
                className="col-span-2"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="courses"
            control={control}
            render={({ field, fieldState }) => (
              <ArrayInput
                label={t<string>('builder.leftSidebar.sections.education.form.courses.label')}
                value={field.value as string[]}
                onChange={field.onChange}
                errors={fieldState.error}
                className="col-span-2"
              />
            )}
          />
        </form>
      </Tips>
    </BaseModal>
  );
};

export default EducationModal;
