import axios, { AxiosError } from 'axios';
import ApiUtils from '../util/apiUtils';
import appConstants from '../util/constants';
import { ApiOptions, OpRes } from '../util/types';
import { ErrorParseService } from './error';

export const getApiData = async <T>(
  endpoint: string,
  options?: ApiOptions
): Promise<OpRes<T>> => {
  try {
    const res = await axios.get(`${appConstants.apiUrl}/${endpoint}`, {
      headers: ApiUtils.parseHeaders(options),
    });

    return { data: res.data, error: null, mode: 'success' };
  } catch (e) {
    const err = e as AxiosError;

    return {
      data: null,
      error: ErrorParseService.parseError(
        err as AxiosError,
        (err as AxiosError).response?.data
      ),
      mode: 'error',
    };
  }
};

export const postApiData = async <T>(
  endpoint: string,
  data: Record<string, any>,
  options?: ApiOptions & {
    method?: 'post' | 'patch';
  }
): Promise<OpRes<T>> => {
  const method = options?.method || 'post';
  try {
    const res = await axios[method](
      `${appConstants.apiUrl}/${endpoint}`,
      data,
      {
        headers: ApiUtils.parseHeaders(options),
        timeout: 30000,
      }
    );

    return { data: res.data, error: null, mode: 'success' };
  } catch (e) {
    const err = e as AxiosError;

    if (options?.validationHandler && err.response?.status === 400) {
      options!.validationHandler!((err.response?.data as any)?.errors || {});
    }

    return {
      data: null,
      error: ErrorParseService.parseError(
        err as AxiosError,
        (err as AxiosError).response?.data
      ),
      mode: 'error',
    };
  }
};

export const postApiFormData = async <T>(
  endpoint: string,
  data: FormData,
  options?: ApiOptions & {
    method?: 'post' | 'patch';
    onProgress?: (val: number) => void;
  }
): Promise<OpRes<T>> => {
  const method = options?.method || 'post';
  try {
    const res = await axios[method](
      `${appConstants.apiUrl}/${endpoint}`,
      data,
      {
        headers: ApiUtils.parseHeaders(options),
        onUploadProgress: (progress) => {
          if (options?.onProgress && progress.total) {
            options.onProgress((progress.loaded * 100) / progress.total);
          }
        },
      }
    );

    return { data: res.data, error: null, mode: 'success' };
  } catch (e) {
    const err = e as AxiosError;

    if (options?.validationHandler && err.response?.status === 400) {
      options!.validationHandler!((err.response?.data as any)?.errors || {});
    }

    return {
      data: null,
      error: ErrorParseService.parseError(
        err as AxiosError,
        (err as AxiosError).response?.data
      ),
      mode: 'error',
    };
  }
};

export const deleteApiData = async <T>(
  endpoint: string,
  options?: ApiOptions
): Promise<OpRes<T>> => {
  try {
    const res = await axios.delete(`${appConstants.apiUrl}/${endpoint}`, {
      headers: ApiUtils.parseHeaders(options),
    });

    return { data: res.data, error: null, mode: 'success' };
  } catch (e) {
    const err = e as AxiosError;

    return {
      data: null,
      error: ErrorParseService.parseError(
        err as AxiosError,
        (err as AxiosError).response?.data
      ),
      mode: 'error',
    };
  }
};
