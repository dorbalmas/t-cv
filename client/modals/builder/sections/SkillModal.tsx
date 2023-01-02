import { joiResolver } from '@hookform/resolvers/joi';
import { Add, DriveFileRenameOutline } from '@mui/icons-material';
import { Button, MenuItem, TextField } from '@mui/material';
import { SectionPath, Skill } from '@reactive-resume/schema';
import Joi from 'joi';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import ArrayInput from '@/components/shared/ArrayInput';
import BaseModal from '@/components/shared/BaseModal';
import Tips from '@/components/shared/Tips';
import { rtlLanguages } from '@/config/languages';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';
import { addItem, editItem } from '@/store/resume/resumeSlice';

type FormData = Skill;

const path: SectionPath = 'sections.skills';

const defaultState: FormData = {
  name: '',
  level: '',
  levelNum: 0,
  keywords: [],
};

const schema = Joi.object<FormData>().keys({
  id: Joi.string(),
  name: Joi.string().required(),
  //   level: Joi.string().allow(''),
  //   levelNum: Joi.number().min(0).max(10).required(),
  keywords: Joi.array().items(Joi.string().optional()),
});

const SkillModal: React.FC = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  const typesLength = t<string>(`builder.leftSidebar.sections.skills.types`, { returnObjects: true }).length;

  const heading: any = t<string>('builder.leftSidebar.sections.skills.heading_one');
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
      <Tips tipsTitle="skills" top="-0.5rem">
        <form className="my-2 grid grid-cols-2 gap-4">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  select
                  className="col-span-2 place-self-center w-60"
                  sx={{
                    '.MuiSelect-icon': {
                      right: rtlLanguages.includes(i18n.language) ? 'inherit' : '7px',
                      left: rtlLanguages.includes(i18n.language) ? '25px' : 'inherit',
                    },
                  }}
                  required
                  autoFocus
                  label={t<string>('builder.leftSidebar.sections.skills.type')}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  {...field}
                >
                  {[...Array(typesLength)].map((item, idx) => (
                    <MenuItem key={idx} value={t<string>(`builder.leftSidebar.sections.skills.types.${idx}`)}>
                      {t<string>(`builder.leftSidebar.sections.skills.types.${idx}`)}
                    </MenuItem>
                  ))}
                </TextField>
              </>
            )}
          />
          {/* <Controller
          name="level"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label={t<string>('builder.common.form.level.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        /> */}

          {/* <Controller
          name="levelNum"
          control={control}
          render={({ field }) => (
            <div className="col-span-2">
              <h4 className="mb-3 font-semibold">{t<string>('builder.common.form.levelNum.label')}</h4>

              <div className="px-3">
                <Slider
                  {...field}
                  marks={[
                    {
                      value: 0,
                      label: 'Disable',
                    },
                    {
                      value: 1,
                      label: 'Beginner',
                    },
                    {
                      value: 10,
                      label: 'Expert',
                    },
                  ]}
                  min={0}
                  max={10}
                  defaultValue={0}
                  color="secondary"
                  valueLabelDisplay="auto"
                  aria-label={t<string>('builder.common.form.levelNum.label')}
                />
              </div>
            </div>
          )}
        /> */}

          <Controller
            name="keywords"
            control={control}
            render={({ field, fieldState }) => (
              <ArrayInput
                label={t<string>('builder.common.form.keywords.label')}
                value={field.value}
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

export default SkillModal;
