import { app } from '@src/store/redux/app';
import { EStoreKey } from '@src/store/redux/storeKey';
import ticketStore from '@src/features/chat/redux';
import { extraActions } from '@src/store/redux/utils/createExtraReducers';
import { combineReducers } from 'redux';

const { ticketActions, ticketReducers, ticketSelectors, ticketStoreNames } =
  ticketStore;

const storeNames = {
  [EStoreKey.app]: app.name,
  ...ticketStoreNames,
};

const actions = {
  redux: extraActions,
  [EStoreKey.app]: app.actions,
  ...ticketActions,
};

const selectors = {
  [EStoreKey.app]: app.selectors,
  ...ticketSelectors,
};

const sagas = {};

const reducers = {
  [EStoreKey.app]: app.reducer,
  ...ticketReducers,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;

export { actions, rootReducer, sagas, selectors, storeNames };
