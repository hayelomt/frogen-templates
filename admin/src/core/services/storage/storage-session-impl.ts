import { logError } from '../../util/logger';
import { BrowserStorage } from './browser-storage';

export class StorageSessionImpl implements BrowserStorage {
  async saveItem<T>(key: string, payload: T): Promise<void> {
    sessionStorage.setItem(key, JSON.stringify(payload));
  }

  async getItem<T>(key: string): Promise<T | null> {
    const data = sessionStorage.getItem(key);
    if (!data) return null;

    try {
      return JSON.parse(data) as T;
    } catch (err) {
      logError('Parse error', err);
      return null;
    }
  }

  async removeItem(key: string): Promise<void> {
    sessionStorage.removeItem(key);
  }
}
