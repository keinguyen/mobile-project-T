import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { EStoreKey } from "@src/features/chat/redux/storeKey";
import { Ticket } from "@src/features/chat/type";
import { extraActions } from "@src/store/redux/utils/createExtraReducers";

interface TicketReducer {
  tickets: typeof ticketsInitialState;
}

const ticketAdapter = createEntityAdapter({
  selectId: (ticket: Ticket) => ticket.channelId,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});
const ticketsInitialState = ticketAdapter.getInitialState();

const initialState: TicketReducer = {
  tickets: ticketsInitialState,
};

const { name, actions, reducer } = createSlice({
  name: EStoreKey.ticket,
  initialState,
  reducers: {
    upsertTicket(state, action: PayloadAction<Ticket>) {
      ticketAdapter.upsertOne(state.tickets, action.payload);
    },
    setAllTickets(state, action: PayloadAction<Ticket[]>) {
      ticketAdapter.setAll(state.tickets, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.purge.type, () => initialState);
  },
});

/**=================== Selectors ====================== */
type State = { [name: string]: TicketReducer };

const ticketSelectors = ticketAdapter.getSelectors(
  (state: State) => state[name].tickets
);

const selectors = {
  ticketIds(state: State): string[] {
    return ticketSelectors.selectIds(state) as string[];
  },
  tickets(state: State): Ticket[] {
    return ticketSelectors.selectAll(state);
  },
};

export default {
  name,
  actions,
  reducer,
  selectors,
};
