import { ActionIcon, Checkbox, Flex, Menu, Text } from '@mantine/core';
import { IconSettings } from '@tabler/icons';
import { useState } from 'react';
import Tools from '../../services/tools';

export type TableSettingsBtnProps = {
  columns: string[];
  visibleFields: Set<string>;
  toggleField: (field: string) => void;
};

const TableSettingsBtn = ({
  columns,
  visibleFields,
  toggleField,
}: TableSettingsBtnProps) => {
  const [settingOpen, setSettingOpen] = useState(false);

  return (
    <>
      <Menu opened={settingOpen} shadow="md" position="top" width={220}>
        <Menu.Target>
          <ActionIcon size="sm" onClick={() => setSettingOpen((o) => !o)}>
            <IconSettings />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Show Fields</Menu.Label>
          {columns.map((field, i) => (
            <Menu.Item
              key={i}
              display="flex"
              onClick={(_) => {
                toggleField(field);
              }}
              px="xs"
              py={2}
            >
              <Flex direction="row" align="center">
                <Checkbox
                  size="sm"
                  mr="sm"
                  checked={visibleFields.has(field)}
                  onChange={() => {}}
                />
                <Text size="sm">{Tools.parseFieldToLabel(field)}</Text>
              </Flex>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default TableSettingsBtn;
