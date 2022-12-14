import env from '@beam-australia/react-env';
import { joiResolver } from '@hookform/resolvers/joi';
import { HowToReg } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { Resume, User } from '@reactive-resume/schema';
import Joi from 'joi';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { ActionCreators } from 'redux-undo';

import BaseModal from '@/components/shared/BaseModal';
import { RESUMES_QUERY } from '@/constants/index';
import { loginWithGoogle, LoginWithGoogleParams, register as registerUser, RegisterParams } from '@/services/auth';
import { ServerError } from '@/services/axios';
import queryClient from '@/services/react-query';
import { createResume, CreateResumeParams } from '@/services/resume';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';

type FormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const defaultState: FormData = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const schema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string()
    .lowercase()
    .min(3)
    .regex(/^[a-z0-9-]+$/, 'only lowercase characters, numbers and hyphens')
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().min(6).required().valid(Joi.ref('password')),
});

const RegisterModal: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { open: isOpen } = useAppSelector((state) => state.modal['auth.register']);

  const { reset, control, handleSubmit } = useForm<FormData>({
    defaultValues: defaultState,
    resolver: joiResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation<void, ServerError, RegisterParams>(registerUser);

  const router = useRouter();
  const { mutateAsync: mutateAsyncResume } = useMutation<Resume, ServerError, CreateResumeParams>(createResume);
  const onSubmitResume = async (user: string) => {
    try {
      await mutateAsyncResume({ name: 'First Resume', slug: 'tcv', public: true });
      queryClient.invalidateQueries(RESUMES_QUERY);
      router.push({
        pathname: '/[username]/[slug]/build',
        query: { username: user, slug: 'tcv' },
      });
      dispatch(ActionCreators.clearHistory());
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const { mutateAsync: loginWithGoogleMutation } = useMutation<User, ServerError, LoginWithGoogleParams>(
    loginWithGoogle
  );

  const handleClose = () => {
    dispatch(setModalState({ modal: 'auth.register', state: { open: false } }));
    reset();
  };

  const onSubmit = async ({ name, username, email, password }: FormData) => {
    await mutateAsync({ name, username, email, password });
    await onSubmitResume(username);
    await handleClose();
  };

  const handleLogin = () => {
    handleClose();
    dispatch(setModalState({ modal: 'auth.login', state: { open: true } }));
  };

  const handleLoginWithGoogle = async (response: CredentialResponse) => {
    if (response.credential) {
      const user = await loginWithGoogleMutation(
        { credential: response.credential },
        { onError: handleLoginWithGoogleError }
      );

      await onSubmitResume(user.username);
      handleClose();
    }
  };

  const handleLoginWithGoogleError = () => {
    toast("Please try logging in using email/password, or use another browser that supports Google's One Tap API.");
  };

  return (
    <BaseModal
      icon={<HowToReg />}
      isOpen={isOpen}
      heading={t<string>('modals.auth.register.heading')}
      handleClose={handleClose}
      footerChildren={
        <div className="flex gap-4">
          {!isEmpty(env('GOOGLE_CLIENT_ID')) && (
            <GoogleLogin onSuccess={handleLoginWithGoogle} onError={handleLoginWithGoogleError} />
          )}

          <Button id="button" type="submit" onClick={handleSubmit(onSubmit)} disabled={isLoading}>
            {t<string>('modals.auth.register.actions.register')}
          </Button>
        </div>
      }
    >
      <p>{t<string>('modals.auth.register.body')}</p>

      <div className="grid gap-4 md:grid-cols-2">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              autoFocus
              label={t<string>('modals.auth.register.form.name.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label={t<string>('modals.auth.register.form.username.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              type="email"
              label={t<string>('modals.auth.register.form.email.label')}
              className="col-span-2"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              type="password"
              label={t<string>('modals.auth.register.form.password.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              type="password"
              label={t<string>('modals.auth.register.form.confirm-password.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />
      </div>

      <p className="text-xs">
        <Trans t={t} i18nKey="modals.auth.register.loginText">
          If you already have an account, you can <a onClick={handleLogin}>login here</a>.
        </Trans>
      </p>
    </BaseModal>
  );
};

export default RegisterModal;
