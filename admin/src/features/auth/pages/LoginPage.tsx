import { Center } from '@mantine/core';
import LoginForm from '../components/LoginForm';
import { useAuthRedirect } from '../lib/hooks/useAuthRedirect';

const LoginPage = () => {
  useAuthRedirect();

  return (
    <>
      <Center pt="10%">
        <LoginForm />
      </Center>
    </>
  );
};

export default LoginPage;
