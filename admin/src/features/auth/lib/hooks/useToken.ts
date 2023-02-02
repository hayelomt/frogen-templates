import useAuthState from '../states/useAuthState';

export const useToken = (): string => {
  const token = useAuthState((state) => state.token);

  if (!token) {
    throw new Error('Token state invalid');
  }

  return token;
};
