import { shallow } from 'zustand/shallow';
import { ReactNode } from 'react';
import useAuthState from '../lib/states/useAuthState';
import LoadingPage from '../../../core/ui/shared/LoadingPage';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [loading, user] = useAuthState(
    (state) => [state.loading, state.user],
    shallow
  );

  if (loading) return <LoadingPage />;

  if (!user) return <Navigate to="/login" replace />;

  return <>{children}</>;
};

export default PrivateRoute;
