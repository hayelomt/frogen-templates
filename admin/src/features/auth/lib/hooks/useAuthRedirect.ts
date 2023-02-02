import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthState from '../states/useAuthState';

export const useAuthRedirect = () => {
  const user = useAuthState((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user]);
};
