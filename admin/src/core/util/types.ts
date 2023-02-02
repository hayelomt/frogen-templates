import { AxiosError, AxiosRequestHeaders } from 'axios';
import { TableMeta } from '../services/tableService';

type ErrorRes = { mode: 'error'; data: null; error: ParsedError };

type SuccessRes<T> = { mode: 'success'; data: T; error: null };

/** Operational response scaffolding type */
export type OpRes<T> = ErrorRes | SuccessRes<T>;

export type FormModes = 'edit' | 'create';

export type BaseResponseModel = {
  id: string;
  created_at?: string;
  updated_at?: string;
};

export type ApiOptions = {
  headers?: AxiosRequestHeaders;
  token?: string;
  validationHandler?: (errors: Record<string, string>) => void;
};

export type ParsedError = {
  msg: string;
  status?: number;
  err?: AxiosError;
  data?: any;
};

export type ApiListArgs = {
  token: string;
};

export type Paginated<T> = {
  data: T[];
  total: number;
};

export type FetchListArgs = { token: string; curPage: number } & TableMeta;

export type Media = {
  id: number;
  name: string;
  file_name: string;
  size: number;
  collection_name: string;
};
