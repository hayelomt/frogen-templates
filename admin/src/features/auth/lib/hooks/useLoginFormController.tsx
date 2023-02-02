import { useForm } from '@mantine/form';
import { useState } from 'react';
import { postApiData } from '../../../../core/services/api';
import { ErrorParseService } from '../../../../core/services/error';
import { toastError } from '../../../../core/util/alert';
import { Login, LoginResponse } from '../models/auth';
import LoginService from '../services/loginService';
import useAuthState from '../states/useAuthState';

export const useLoginFormController = () => {
  const [submitting, setSubmitting] = useState(false);
  const initialValues: Login = {
    email: '',
    password: '',
    remember: false,
  };
  const loginUser = useAuthState((state) => state.loginUser);

  const form = useForm<Login>({
    initialValues,
    validate: LoginService.validations(),
  });

  const login = async (payload: Login) => {
    setSubmitting(true);
    const { remember, ...loginData } = payload;
    const { data, error, mode } = await postApiData<LoginResponse>(
      'login',
      loginData,
      {
        validationHandler: (errors) =>
          ErrorParseService.parseValidation(errors, form.setFieldError),
      }
    );
    setSubmitting(false);

    if (mode === 'error') {
      toastError({ title: 'Login error', message: error.msg });
      return;
    }

    loginUser(data, remember);
  };

  return { form, login, submitting };
};
