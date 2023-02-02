import { FormValidateInput } from '@mantine/form/lib/types';
import { validateRules, Validator } from '../../../../core/services/validation';
import { Login, LoginResponse } from '../models/auth';
import {
  SessionStorageFactory,
  StorageFactory,
} from '../../../../core/services/storage/storage-factory';
import appConstants from '../../../../core/util/constants';
import { postApiData } from '../../../../core/services/api';
import { User } from '../../../user/logic/models/user';

const storage = StorageFactory.getInstance();
const sessionStorage = SessionStorageFactory.getInstance();

const LoginService = {
  validations: (): FormValidateInput<Login> => {
    return {
      email: (val) =>
        validateRules([
          Validator.isString('email', val),
          Validator.isNotEmpty('email', val),
          Validator.isEmail('email', val),
        ]),
      password: (val) => validateRules([Validator.isNotEmpty('password', val)]),
    };
  },

  saveLogin: (data: LoginResponse, remember: boolean) => {
    sessionStorage.saveItem(appConstants.storageKeys.user, data);
    if (remember) {
      storage.saveItem(appConstants.storageKeys.user, data);
    }
  },

  clearLogin: () => {
    sessionStorage.removeItem(appConstants.storageKeys.user);
    storage.removeItem(appConstants.storageKeys.user);
  },

  loadSaved: async (): Promise<LoginResponse | null> => {
    const saved = await sessionStorage.getItem<LoginResponse>(
      appConstants.storageKeys.user
    );

    return (
      saved || storage.getItem<LoginResponse>(appConstants.storageKeys.user)
    );
  },

  checkUserValidity: (token: string) => {
    return postApiData<{ data: User }>(
      'auth-pragma23/who-am-i',
      {},
      {
        token: token,
      }
    );
  },
};

export default LoginService;
