import { AppShell, Navbar, Text, Group, Divider } from '@mantine/core';
import { ReactNode } from 'react';
import { IconHome } from '@tabler/icons';
import SidebarLink from './components/SidebarLink';
import SettingsMenu from './components/SettingsMenu';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppShell
        padding={0}
        navbar={
          <Navbar width={{ base: 270 }} height="100%" p="xs">
            <Navbar.Section>
              <Text size="md" py="md">
                Header
              </Text>
            </Navbar.Section>
            <Navbar.Section grow mt="md">
              <SidebarLink to="/" label="Home" icon={<IconHome size={18} />} />
              {/* <SidebarLink
                to="/client"
                label="Client"
                icon={<IconBriefcase size={18} />}
              /> */}

              <Divider mt="md" />
            </Navbar.Section>
            <Navbar.Section>
              <Group position="apart">
                <Text>Admin</Text>

                <SettingsMenu />
              </Group>
            </Navbar.Section>
          </Navbar>
        }
        // header={
        //   <Header height={60} p="xs">
        //     {/* Header content */}
        //   </Header>
        // }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
};

export default Layout;
