import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../features/auth/containers/PrivateRoute';
import LoginPage from '../../features/auth/pages/LoginPage';
import HomePage from '../../features/home/ui/pages/HomePage';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          {/* <Route
            path="/client"
            element={
              <PrivateRoute>
                <ClientPage />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
