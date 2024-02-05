import { EStoreKey } from '@src/features/chat/redux/storeKey';
import ticket from '@src/features/chat/redux/ticket';

const storeNames = {
  [EStoreKey.ticket]: ticket.name,
};

const actions = {
  [EStoreKey.ticket]: ticket.actions,
};

const selectors = {
  [EStoreKey.ticket]: ticket.selectors,
};

const reducers = {
  [EStoreKey.ticket]: ticket.reducer,
};

export default {
  ticketActions: actions,
  ticketReducers: reducers,
  ticketSelectors: selectors,
  ticketStoreNames: storeNames,
};
