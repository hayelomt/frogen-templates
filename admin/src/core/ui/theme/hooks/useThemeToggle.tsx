import { ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import appConstants from '../../../util/constants';

export const useThemeToggle = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: appConstants.storageKeys.theme,
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return { colorScheme, toggleColorScheme };
};
