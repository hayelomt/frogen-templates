import { ActionIcon, Button, Flex, Group, Popover, Text } from '@mantine/core';
import { ButtonGroup } from '@mantine/core/lib/Button/ButtonGroup/ButtonGroup';
import { IconCheck, IconTrash, IconX } from '@tabler/icons';
import { useState } from 'react';
import { useDeleteApi } from '../../hooks/api/useDeleteApi';

type DeleteItemProps = {
  id: string;
  deleteUrl: string;
  onDeleted: () => void;
};

const DeleteItem = ({ id, deleteUrl, onDeleted }: DeleteItemProps) => {
  const [opened, setOpened] = useState(false);
  const { deleteId, deleteItem } = useDeleteApi(id, deleteUrl, onDeleted);

  return (
    <>
      <Popover
        opened={opened}
        onChange={setOpened}
        width={200}
        position="bottom"
        withArrow
        shadow="md"
      >
        <Popover.Target>
          <ActionIcon
            radius="xs"
            onClick={() => setOpened((o) => !o)}
            loading={deleteId === id}
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Flex direction="column">
            <Text align="center" mb="sm">
              Are you sure you want to delete this item
            </Text>

            <Group position="center" pr="xs">
              <ActionIcon
                color="green"
                onClick={() => {
                  setOpened(false);
                  deleteItem();
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

export default DeleteItem;
