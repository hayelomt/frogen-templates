import {
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

type SidebarLinkProps = {
  icon: ReactElement;
  label: string;
  to: string;
};

const SidebarLink = ({ icon, label, to }: SidebarLinkProps) => {
  const theme = useMantineTheme();
  const location = useLocation();

  const backgroundColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2];
  return (
    <>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          background:
            location.pathname === to ? backgroundColor : 'transparent',
          borderRadius: theme.radius.sm,
          '&:hover': {
            backgroundColor,
          },
        })}
        component={Link}
        to={to}
      >
        <Group p={4}>
          <ThemeIcon size={18}>{icon}</ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </>
  );
};

export default SidebarLink;
