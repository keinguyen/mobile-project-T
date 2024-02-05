import AsyncStorage from '@react-native-async-storage/async-storage';
import { Action, Store, configureStore } from '@reduxjs/toolkit';
import { createAsyncStorage } from '@src/store/createStorage';
import { RootState, actions, rootReducer } from '@src/store/redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  Persistor,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
  purgeStoredState,
} from 'redux-persist';

class ReduxStore {
  private PERSIST_VERSION = 1;
  private PURGED_FLAG_STORAGE_KEY = 'REDUX@PURGED_FLAG_STORAGE_KEY';

  private _store: Store<RootState, Action<string>>;
  private _persistor: Persistor | undefined;
  private _persistConfig: PersistConfig<RootState>;

  constructor() {
    // Note: this is an attempt to mute the possible undefined store
    this._store = {} as any;
    this._persistConfig = this._getPersistConfig();
  }

  public createStore() {
    this._store = this._createStore(this._persistConfig);
  }

  public get instance() {
    return this._store;
  }

  public get persistor() {
    return this._persistor;
  }

  public get getState() {
    return this._store?.getState;
  }

  public get dispatch() {
    return this._store?.dispatch;
  }

  public async rehydrateStore(): Promise<void> {
    try {
      if (!this._store) {
        throw new Error('Cannot rehydrate a undefined store');
      }

      const purged = !!(await AsyncStorage.getItem(
        this.PURGED_FLAG_STORAGE_KEY,
      ));

      if (!purged) {
        await purgeStoredState(this._getPersistConfig());

        // Send a signal to every reducers to restore initial state
        this._store.dispatch(actions.redux.purge);

        await AsyncStorage.setItem(this.PURGED_FLAG_STORAGE_KEY, '1');
        console.info('data purged');
      }

      await new Promise<void>((resolve) => {
        this._persistor = persistStore(this._store, undefined, resolve);
      });
      if (!this._persistor) {
        throw new Error('Failed to rehydrate redux store');
      }

      console.info('re-hydrated');
    } catch (error) {
      console.error(error);
    }
  }

  private _getPersistConfig(): PersistConfig<RootState> {
    return {
      key: 'root',
      version: this.PERSIST_VERSION,
      storage: createAsyncStorage(),
      debug: __DEV__,
      blacklist: [],
    };
  }

  private _createStore(
    config: PersistConfig<RootState>,
  ): Store<RootState, Action<string>> {
    return configureStore({
      reducer: persistReducer<RootState>(config, rootReducer),
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
  }
}

export const reduxStore = new ReduxStore();
