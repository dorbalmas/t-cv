import { joiResolver } from '@hookform/resolvers/joi';
import { Add, DriveFileRenameOutline } from '@mui/icons-material';
import { Button, MenuItem, TextField } from '@mui/material';
import { Language, SectionPath } from '@reactive-resume/schema';
import Joi from 'joi';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import BaseModal from '@/components/shared/BaseModal';
import Tips from '@/components/shared/Tips';
import { rtlLanguages } from '@/config/languages';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';
import { addItem, editItem } from '@/store/resume/resumeSlice';

type FormData = Language;

const path: SectionPath = 'sections.languages';

const defaultState: FormData = {
  name: '',
  level: '',
  levelNum: 0,
};

const schema = Joi.object<FormData>().keys({
  id: Joi.string(),
  name: Joi.string().required(),
  level: Joi.string().required(),
  levelNum: Joi.number().min(0).max(10).required(),
});

const LanguageModal: React.FC = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  const levelsLength = t<string>(`builder.leftSidebar.sections.languages.levels`, { returnObjects: true }).length;

  const heading: any = t<string>('builder.leftSidebar.sections.languages.heading_one');
  const { open: isOpen, payload } = useAppSelector((state) => state.modal[`builder.${path}`]);

  const item: FormData = get(payload, 'item', null);
  const isEditMode = useMemo(() => !!item, [item]);

  const addText = t<string>('builder.common.actions.add') + ' ' + heading;
  const editText = t<string>('builder.common.actions.edit') + ' ' + heading;

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
      <Tips tipsTitle="language" top="-0.5rem">
        <form className="my-2 grid grid-cols-2 gap-4">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                required
                autoFocus
                label={t<string>('builder.rightSidebar.sections.settings.global.language.primary')}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="level"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  select
                  sx={{
                    '.MuiSelect-icon': {
                      right: rtlLanguages.includes(i18n.language) ? 'inherit' : '7px',
                      left: rtlLanguages.includes(i18n.language) ? '25px' : 'inherit',
                    },
                  }}
                  required
                  label={t<string>('builder.common.form.level.label')}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  {...field}
                >
                  {[...Array(levelsLength)].map((item, idx) => (
                    <MenuItem key={idx} value={t<string>(`builder.leftSidebar.sections.languages.levels.${idx}`)}>
                      {t<string>(`builder.leftSidebar.sections.languages.levels.${idx}`)}
                    </MenuItem>
                  ))}
                </TextField>
              </>
            )}
          />
        </form>
      </Tips>
    </BaseModal>
  );
};

export default LanguageModal;
