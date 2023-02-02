import { SetFieldError } from '@mantine/form/lib/types';
import { useState } from 'react';
import useAuthState from '../../../features/auth/lib/states/useAuthState';
import { postApiData } from '../../services/api';
import { ErrorParseService } from '../../services/error';

export const useDataApi = () => {
  const token = useAuthState((state) => state.token);
  const [loading, setLoading] = useState(false);

  const sendData = async <T>(
    endpoint: string,
    {
      payload,
      errorSetter,
    }: {
      payload: Record<string, any>;
      errorSetter: SetFieldError<T>;
    }
  ) => {
    setLoading(true);
    const res = await postApiData<T>(endpoint, payload, {
      validationHandler: (errors) =>
        ErrorParseService.parseValidation(errors, errorSetter),
      token: token!,
    });
    setLoading(false);

    return res;
  };

  return { loading, sendData };
};
