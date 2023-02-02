import { logError } from '../../util/logger';
import { BrowserStorage } from './browser-storage';

export class StorageLocalImpl implements BrowserStorage {
  async saveItem<T>(key: string, payload: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify(payload));
  }

  async getItem<T>(key: string): Promise<T | null> {
    const data = localStorage.getItem(key);
    if (!data) return null;

    try {
      return JSON.parse(data) as T;
    } catch (err) {
      logError('Parse error', err);
      return null;
    }
  }

  async removeItem(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}

export const StorageLocalSync = {
  saveItem<T>(key: string, payload: T) {
    localStorage.setItem(key, JSON.stringify(payload));
  },

  getItem<T>(key: string): T | null {
    const saved = localStorage.getItem(key);

    if (!saved) return null;

    try {
      return JSON.parse(saved) as T;
    } catch (err) {
      logError('Storage parse error', err);
      return null;
    }
  },
};
