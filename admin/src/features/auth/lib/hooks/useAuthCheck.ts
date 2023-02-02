import { useEffect } from 'react';
import useAuthState from '../states/useAuthState';

export const useAuthCheck = () => {
  const initialize = useAuthState((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, []);
};
