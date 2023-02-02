import { create } from 'zustand';
import { User } from '../../../user/logic/models/user';
import { LoginResponse } from '../models/auth';
import LoginService from '../services/loginService';

type AuthState = {
  user: User | null;
  token: string | null;
  loading: boolean;
};

type AuthAction = {
  loginUser: (loginResponse: LoginResponse, remember: boolean) => void;
  logoutUser: () => void;
  initialize: () => void;
};

const initialState: AuthState = {
  user: null,
  token: null,
  loading: true,
};

const useAuthState = create<AuthState & AuthAction>()((set) => ({
  ...initialState,

  loginUser(loginResponse, remember) {
    LoginService.saveLogin(loginResponse, remember);

    set({
      user: loginResponse.data,
      token: loginResponse.token,
      loading: false,
    });
  },

  logoutUser() {
    LoginService.clearLogin();
    set({
      user: null,
      token: null,
      loading: false,
    });
  },

  async initialize() {
    const saved = await LoginService.loadSaved();
    if (!saved) {
      set({ loading: false });
      return;
    }
    set({ user: saved.data, token: saved.token, loading: false });

    // Verify stored token to make sure its not manually tampered on frontend
    const { data, mode, error } = await LoginService.checkUserValidity(
      saved.token
    );
    if (mode === 'success') {
      saved.data = data.data;
      LoginService.saveLogin(saved, true);
      set({ user: saved.data });
      return;
    } else {
      set({ user: null, token: null });
    }
  },
}));

export default useAuthState;
