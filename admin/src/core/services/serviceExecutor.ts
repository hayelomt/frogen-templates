import { logError } from '../util/logger';
import { OpRes } from '../util/types';

const defaultErrorFactory = (err: Error) => err?.message;

export const serviceExecutor = async <T>(
  cb: () => Promise<T>,
  options?: { errorParseFactory?: (err: Error) => string; source?: string }
): Promise<OpRes<T>> => {
  try {
    const res = await cb();
    return { mode: 'success', data: res, error: null };
  } catch (e) {
    const err = e as Error;
    logError(options?.source || '');

    const parsedError = options?.errorParseFactory
      ? options!.errorParseFactory(err)
      : defaultErrorFactory(err);

    return { mode: 'error', data: null, error: parsedError };
  }
};
