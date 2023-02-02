import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useAuthCheck } from '../../features/auth/lib/hooks/useAuthCheck';
import { useThemeToggle } from '../ui/theme/hooks/useThemeToggle';
import { themeOverride } from '../ui/theme/themeOverride';
import AppRoutes from './AppRoutes';

export default function App() {
  const { colorScheme, toggleColorScheme } = useThemeToggle();
  useAuthCheck();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: colorScheme, ...themeOverride }}
      >
        <NotificationsProvider>
          <AppRoutes />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
