import { useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { BarLoader } from 'react-spinners';

type LoaderProps = {
  loading: boolean;
};

const Linear = ({ loading }: LoaderProps) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const color =
    colorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.cyan[8];

  return (
    <>
      {loading ? (
        <BarLoader width="100%" color={color} />
      ) : (
        <div style={{ height: '4px' }} />
      )}
    </>
  );
};

const Loaders = {
  Linear,
};

export default Loaders;
