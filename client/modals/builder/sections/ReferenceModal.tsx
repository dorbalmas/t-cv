import { joiResolver } from '@hookform/resolvers/joi';
import { Add, DriveFileRenameOutline } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Reference, SectionPath } from '@reactive-resume/schema';
import Joi from 'joi';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import BaseModal from '@/components/shared/BaseModal';
import Tips from '@/components/shared/Tips';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';
import { addItem, editItem } from '@/store/resume/resumeSlice';

type FormData = Reference;

const path: SectionPath = 'sections.references';

const defaultState: FormData = {
  name: '',
  relationship: '',
  phone: '',
};

const schema = Joi.object<FormData>().keys({
  id: Joi.string(),
  name: Joi.string().required(),
  relationship: Joi.string().required(),
  phone: Joi.string().allow(''),
});

const ReferenceModal: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const heading: any = t<string>('builder.leftSidebar.sections.references.heading_one');
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
      <Tips tipsTitle="reference" top="-0.5rem">
        <form className="my-2 grid grid-cols-2 gap-4">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                required
                autoFocus
                label={t<string>('builder.common.form.name.label')}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="relationship"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                required
                label={t<string>('builder.leftSidebar.sections.references.form.relationship.label')}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                label={t<string>('builder.common.form.phone.label')}
                className="col-span-2 place-self-center w-60"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </form>
      </Tips>
    </BaseModal>
  );
};

export default ReferenceModal;
