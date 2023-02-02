import { BrowserStorage } from './browser-storage';
import { StorageLocalImpl } from './storage-local-impl';
import { StorageSessionImpl } from './storage-session-impl';

export class StorageFactory {
  private static storage: StorageLocalImpl | null = null;

  private constructor() {}

  static getInstance(): BrowserStorage {
    if (StorageFactory.storage === null) {
      StorageFactory.storage = new StorageLocalImpl();
    }

    return StorageFactory.storage;
  }
}

export class SessionStorageFactory {
  private static storage: StorageSessionImpl | null = null;

  private constructor() {}

  static getInstance(): BrowserStorage {
    if (SessionStorageFactory.storage === null) {
      SessionStorageFactory.storage = new StorageSessionImpl();
    }

    return SessionStorageFactory.storage;
  }
}
