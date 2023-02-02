import { ActionIcon, Button, Flex, Group, Popover, Text } from '@mantine/core';
import { IconCheck, IconTrash, IconX } from '@tabler/icons';
import { useState } from 'react';
import { useDeleteMultiApi } from '../../hooks/api/useDeleteMultiApi';

export type DeleteItemMultiProps = {
  selectedIds: string[];
  url: string;
  onDeleteDone: (ids: string[]) => void;
  onSetMultiDeleting: (val: boolean) => void;
};

const DeleteItemMulti = ({
  selectedIds,
  url,
  onDeleteDone,
  onSetMultiDeleting,
}: DeleteItemMultiProps) => {
  const [opened, setOpened] = useState(false);
  const { deleteIds, deleteItems } = useDeleteMultiApi(
    selectedIds,
    url,
    () => onDeleteDone(selectedIds),
    onSetMultiDeleting
  );

  if (selectedIds.length === 0) return null;

  return (
    <>
      <Popover
        opened={opened}
        onChange={setOpened}
        width={300}
        position="bottom"
        withArrow
        shadow="md"
      >
        <Popover.Target>
          <Button
            loading={deleteIds.length > 0}
            disabled={deleteIds.length > 0}
            leftIcon={<IconTrash size={14} />}
            variant="subtle"
            onClick={() => setOpened((o) => !o)}
            color="red"
          >
            Delete Selected
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Flex direction="column">
            <Text align="center" mb="sm">
              Are you sure you want to delete selected items?
            </Text>

            <Group position="center" pr="xs">
              <ActionIcon
                color="green"
                onClick={() => {
                  setOpened(false);
                  deleteItems();
                }}
              >
                <IconCheck />
              </ActionIcon>

              <ActionIcon
                color="red"
                onClick={() => {
                  setOpened(false);
                }}
              >
                <IconX />
              </ActionIcon>
            </Group>
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};

export default DeleteItemMulti;
