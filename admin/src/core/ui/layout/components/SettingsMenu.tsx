import { ActionIcon, Menu } from '@mantine/core';
import { IconLogout, IconSettings } from '@tabler/icons';
import useAuthState from '../../../../features/auth/lib/states/useAuthState';
import ThemeToggle from '../../theme/ThemeToggle';

const SettingsMenu = () => {
  const logout = useAuthState((state) => state.logoutUser);

  return (
    <>
      <Menu shadow="md" position="top" width={200}>
        <Menu.Target>
          <ActionIcon>
            <IconSettings />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Settings</Menu.Label>
          <ThemeToggle />
          <Menu.Item icon={<IconLogout size={14} />} onClick={() => logout()}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default SettingsMenu;
