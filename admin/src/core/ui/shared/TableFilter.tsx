import { Box, Button, Group } from '@mantine/core';
import { IconFilter, IconRefresh } from '@tabler/icons';
import { useState } from 'react';
import { BarLoader } from 'react-spinners';
import { useColors } from '../../hooks/ui/useColors';
import DeleteItemMulti, { DeleteItemMultiProps } from './DeleteItemMulti';
import SortBtn, { SortBtnArgs } from './SortBtn';
import TableSettingsBtn, { TableSettingsBtnProps } from './TableSettingsBtn';

type TableFilterArgs = {
  loading: boolean;
  sort: SortBtnArgs;
  filter: {
    filters: any[];
    onApply: (val: any) => void;
  };
  settings: TableSettingsBtnProps;
  deleteProps: DeleteItemMultiProps;
  onRefresh: () => void;
};

const TableFilter = ({
  loading,
  onRefresh,
  settings,
  deleteProps,
  sort,
}: TableFilterArgs) => {
  const loaderColor = useColors('linearLoader');

  return (
    <>
      <Box>
        <Group
          position="apart"
          align="center"
          pos="relative"
          mx={0}
          px={0}
          pb={4}
        >
          <Group spacing="xs" mx={0}>
            <Button
              disabled
              leftIcon={<IconFilter size={14} />}
              variant="subtle"
            >
              Filter
            </Button>
            <SortBtn {...sort} />
            <DeleteItemMulti {...deleteProps} />
          </Group>

          <Group pos="relative" spacing={0}>
            <Button
              disabled={loading}
              leftIcon={<IconRefresh size={14} />}
              variant="subtle"
              onClick={onRefresh}
              mr={0}
            >
              Refresh
            </Button>

            <TableSettingsBtn {...settings} />
          </Group>
        </Group>
        <Box
          sx={{
            backgroundColor: 'transparent',
            width: '100%',
            height: '2px',
            position: 'relative',
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
          }}
        >
          {loading && (
            <BarLoader
              style={{ bottom: 0, left: 0, right: 0 }}
              width="100%"
              color={loaderColor}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default TableFilter;
