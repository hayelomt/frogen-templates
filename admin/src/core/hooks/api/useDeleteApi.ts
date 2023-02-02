import { useState } from 'react';
import { useToken } from '../../../features/auth/lib/hooks/useToken';
import { deleteApiData } from '../../services/api';
import { toastError, toastSuccess } from '../../util/alert';

export const useDeleteApi = (
  id: string,
  url: string,
  onDeleted: () => void
) => {
  const token = useToken();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const deleteItem = async () => {
    setDeleteId(id);
    const { mode, error } = await deleteApiData(url, { token });
    setDeleteId(null);

    if (mode === 'error') {
      toastError({ title: 'Error removing item', message: error.msg });
      return;
    }
    toastSuccess({ title: 'Item removed' });
    onDeleted();
  };

  return { deleteId, deleteItem };
};
