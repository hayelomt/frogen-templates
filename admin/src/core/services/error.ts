import { SetFieldError } from '@mantine/form/lib/types';
import { AxiosError } from 'axios';
import { ParsedError } from '../util/types';

export const ErrorParseService = {
  parseError: (err: AxiosError, data?: any): ParsedError => {
    if (err.response?.status === 400)
      return {
        status: 400,
        msg: 'Missing or invalid data',
        err,
        data,
      };
    if (err.response?.status === 401)
      return {
        status: 401,
        msg: 'Unauthorized access, try logging in',
        err,
        data,
      };
    if (err.response?.status === 403)
      return {
        status: 403,
        msg: "Forbidden access, you don't have enough permission",
        err,
        data,
      };
    if (err.response?.status === 404)
      return { status: 404, msg: 'Item / Resource Not Found', err, data };
    if (err.response?.status === 503)
      return {
        status: 503,
        msg: 'Server under maintenance, check back in a while',
        err,
        data,
      };

    return { status: 500, msg: 'Unknown server error occurred', err, data };
  },

  parseValidation: <T>(
    errors: Record<string, string>,
    errorSetter: SetFieldError<T>
  ) => {
    Object.entries(errors).map(([key, val]) => {
      errorSetter(key, val);
    });
  },
};
