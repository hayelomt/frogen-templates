import { Center, useMantineTheme } from '@mantine/core';
import { BeatLoader } from 'react-spinners';

const LoadingPage = () => {
  const theme = useMantineTheme();

  return (
    <>
      <Center style={{ height: '100vh' }}>
        <BeatLoader
          color={
            theme.colorScheme === 'dark'
              ? theme.colors.blue[4]
              : theme.colors.blue[8]
          }
        />
      </Center>
    </>
  );
};

export default LoadingPage;
