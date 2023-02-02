import { AxiosRequestHeaders } from 'axios';
import { ApiOptions } from './types';

const ApiUtils = {
  parseHeaders: (options?: ApiOptions): Partial<AxiosRequestHeaders> => ({
    Accept: 'application/json',
    ...((options?.headers || {}) as any),
    ...(options?.token ? { Authorization: `Bearer ${options!.token}` } : {}),
  }),
};

export default ApiUtils;
