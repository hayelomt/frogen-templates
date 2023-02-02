import { ColorScheme, useMantineTheme } from '@mantine/core';

type ColorsKey = 'linearLoader' | 'tableFooterBorder';

export const useColors = (key: ColorsKey): string => {
  const { colors, colorScheme } = useMantineTheme();

  const colorMap: Record<ColorsKey, Record<ColorScheme, string>> = {
    linearLoader: {
      dark: colors.blue[5],
      light: colors.blue[7],
    },
    tableFooterBorder: {
      dark: colors.gray[7],
      light: colors.gray[5],
    },
  };

  return colorMap[key][colorScheme];
};
