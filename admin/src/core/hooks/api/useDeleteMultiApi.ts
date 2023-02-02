import { useState } from 'react';
import { useToken } from '../../../features/auth/lib/hooks/useToken';
import { postApiData } from '../../services/api';
import { toastError, toastSuccess } from '../../util/alert';

export const useDeleteMultiApi = (
  ids: string[],
  url: string,
  onDeleted: () => void,
  onSetDeleting: (val: boolean) => void
) => {
  const token = useToken();
  const [deleteIds, setDeleteIds] = useState<string[]>([]);

  const deleteItems = async () => {
    setDeleteIds(ids);
    onSetDeleting(true);

    const { mode, error } = await postApiData(
      url,
      {
        ids,
      },
      { token }
    );
    setDeleteIds([]);
    onSetDeleting(false);

    if (mode === 'error') {
      toastError({ title: 'Error removing items', message: error.msg });
      return;
    }
    toastSuccess({ title: 'Item removed' });
    onDeleted();
  };

  return { deleteIds, deleteItems };
};
