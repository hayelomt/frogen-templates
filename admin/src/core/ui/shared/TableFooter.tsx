import { ActionIcon, Box, Flex, Select, Text, TextInput } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';
import { useColors } from '../../hooks/ui/useColors';

type TableFooterProps = {
  itemCount: number;
  total: number;
  perPage: number;
  curPage: number;
  onSetPage: (i: number) => void;
  onSetRowsPerPage: (i: number) => void;
  onNext: () => void;
  onPrev: () => void;
  loading: boolean;
};

const TableFooter = ({
  itemCount,
  total,
  perPage,
  curPage,
  onSetPage,
  onSetRowsPerPage,
  onNext,
  onPrev,
  loading,
}: TableFooterProps) => {
  const footerColor = useColors('tableFooterBorder');

  const pageCount = perPage > 0 ? Math.ceil(total / perPage) : 0;

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          borderTop: `1px solid ${footerColor}`,
        }}
        px="md"
        py={6}
      >
        <Flex direction="row" align="center">
          <ActionIcon
            mr="sm"
            disabled={loading || total === 0 || curPage === 1}
            onClick={onPrev}
          >
            <IconArrowLeft size={16} />
          </ActionIcon>
          <Text size="xs" mr="sm" weight="600">
            Page
          </Text>
          <Select
            disabled={loading}
            value={`${curPage}`}
            size="xs"
            w={55}
            onChange={(val) => onSetPage(val ? parseInt(val, 10) : 1)}
            data={Array(pageCount)
              .fill(null)
              .map((_, i) => ({ value: `${i + 1}`, label: `${i + 1}` }))}
            mr="sm"
          />
          <Text size="xs" mr="sm" weight="600">
            of {pageCount}
          </Text>
          <ActionIcon
            mr="sm"
            disabled={loading || total === 0 || curPage === pageCount}
            onClick={onNext}
          >
            <IconArrowRight size={16} />
          </ActionIcon>
          <Select
            disabled={loading}
            value={`${perPage}`}
            size="xs"
            w={100}
            onChange={(val) => onSetRowsPerPage(val ? parseInt(val) : 20)}
            data={[
              { value: '3', label: '3 rows' },
              { value: '20', label: '20 rows' },
              { value: '50', label: '50 rows' },
              { value: '100', label: '100 rows' },
              { value: '200', label: '200 rows' },
              { value: '500', label: '500 rows' },
            ]}
            mr="sm"
          />
          <Text size="xs" mr="sm" weight="600">
            {itemCount} of {total} Records
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default TableFooter;
