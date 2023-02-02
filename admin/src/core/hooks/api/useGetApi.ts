import { SetFieldError } from '@mantine/form/lib/types';
import { useState } from 'react';
import useAuthState from '../../../features/auth/lib/states/useAuthState';
import { getApiData, postApiData } from '../../services/api';
import { ErrorParseService } from '../../services/error';

export const useGetApi = () => {
  const token = useAuthState((state) => state.token);
  const [loading, setLoading] = useState(false);

  const getData = async <T>(endpoint: string) => {
    setLoading(true);
    const res = await getApiData<T>(endpoint, {
      token: token!,
    });
    setLoading(false);

    return res;
  };

  return { loading, getData };
};
