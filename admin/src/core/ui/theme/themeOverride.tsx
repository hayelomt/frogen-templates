import { MantineThemeOverride } from '@mantine/core';

export const themeOverride: MantineThemeOverride = {
  components: {
    Button: {
      defaultProps: {
        size: 'xs',
      },
    },
    Drawer: {
      styles: {
        drawer: {
          display: 'flex',
          flexDirection: 'column',
        },
        body: {
          flexGrow: 1,
          overflowY: 'auto',
        },
      },
    },
  },
};
