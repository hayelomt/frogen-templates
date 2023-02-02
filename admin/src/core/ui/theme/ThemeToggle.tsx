import { ActionIcon, Menu, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <Menu.Item
        icon={
          colorScheme === 'dark' ? (
            <IconSun size={14} color="yellow" />
          ) : (
            <IconMoonStars size={14} color="blue" />
          )
        }
        onClick={() => toggleColorScheme()}
      >
        Theme
      </Menu.Item>
    </>
  );
};

export default ThemeToggle;
