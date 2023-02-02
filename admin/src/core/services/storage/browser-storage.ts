export interface BrowserStorage {
  /**
   * Save items in browser
   *
   * @param key
   * @param payload
   */
  saveItem<T>(key: string, payload: T): Promise<void>;

  /**
   * Load items from in browser storage
   *
   * @param key
   */
  getItem<T>(key: string): Promise<T | null>;

  /**
   * Remove item from browser storage
   *
   * @param key
   */
  removeItem(key: string): Promise<void>;
}
