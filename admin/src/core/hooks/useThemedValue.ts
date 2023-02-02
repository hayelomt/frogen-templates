import { useMantineTheme } from '@mantine/core';

export const useThemedValue = <T>(lightValue: T, darkValue: T): T => {
  const theme = useMantineTheme();

  return theme.colorScheme === 'dark' ? darkValue : lightValue;
};
