import { Button, Flex, Popover, Select, Switch, Text } from '@mantine/core';
import { IconSortAZ } from '@tabler/icons';
import { useState } from 'react';

export type SortBtnArgs = {
  fields: string[];
  currentField: string;
  ascending: boolean;
  onApply: (field: string, asc: boolean) => void;
};

const SortBtn = ({ fields, currentField, ascending, onApply }: SortBtnArgs) => {
  const [opened, setOpened] = useState(false);
  const [asc, setAsc] = useState(ascending);
  const [selectedField, setSelectedField] = useState(currentField);

  return (
    <>
      <Popover
        opened={opened}
        onChange={setOpened}
        width={250}
        position="bottom"
        withArrow
        shadow="md"
      >
        <Popover.Target>
          <Button
            leftIcon={<IconSortAZ size={14} />}
            variant="subtle"
            onClick={() => setOpened((o) => !o)}
          >
            Sort
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Flex direction="column">
            <Switch
              label="ascending"
              checked={asc}
              onChange={(e) => setAsc(e.currentTarget.checked)}
            />
            <Flex direction="row" align="center">
              <Select
                size="xs"
                w={'100%'}
                value={selectedField}
                onChange={(val) => {
                  setSelectedField(val!);
                }}
                data={fields.map((i) => ({ value: i, label: i }))}
                mr="sm"
              />

              <Button
                onClick={() => {
                  onApply(selectedField, asc);
                  setOpened(false);
                }}
              >
                Apply
              </Button>
            </Flex>
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};

export default SortBtn;
