import { StorageLocalSync } from './storage/storage-local-impl';

export type TableMeta = {
  limit: number;
  sort_field: string;
  sort_op: 'asc' | 'desc';
  visibleFields: string[] | null;
};

const TableService = {
  /**
   * Returns table info persisted for a given model key
   *
   */
  getSavedConfig: (key: string): TableMeta => {
    return (
      StorageLocalSync.getItem(key) || {
        limit: 20,
        sort_field: 'updated_at',
        sort_op: 'asc',
        visibleFields: null,
      }
    );
  },

  /**
   * Persists table config data to local storage
   *
   * @param key
   * @param meta
   */
  saveConfig: (key: string, meta: TableMeta) => {
    StorageLocalSync.saveItem(key, meta);
  },
};

export default TableService;
