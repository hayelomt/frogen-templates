import { SetFieldError } from '@mantine/form/lib/types';
import { useState } from 'react';
import useAuthState from '../../../features/auth/lib/states/useAuthState';
import { postApiFormData } from '../../services/api';
import { ErrorParseService } from '../../services/error';

export const useFormDataApi = () => {
  const token = useAuthState((state) => state.token);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const upload = async <T>(
    endpoint: string,
    {
      payload,
      errorSetter,
      method = 'post',
    }: {
      payload: FormData;
      errorSetter: SetFieldError<T>;
      method?: 'post' | 'patch';
    }
  ) => {
    setLoading(true);
    setProgress(0);
    const res = await postApiFormData<T>(endpoint, payload, {
      validationHandler: (errors) =>
        ErrorParseService.parseValidation(errors, errorSetter),
      token: token!,
      onProgress: setProgress,
      method,
      headers: {
        'content-type': 'multipart/form-data',
      } as any,
    });
    setLoading(false);

    return res;
  };

  return { loading, progress, upload };
};
