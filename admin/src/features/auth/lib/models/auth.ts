import { User } from '../../../user/logic/models/user';

export type Login = {
  email: string;
  password: string;
  remember: boolean;
};

export type LoginResponse = {
  data: User;
  token: string;
  token_type: string;
};
