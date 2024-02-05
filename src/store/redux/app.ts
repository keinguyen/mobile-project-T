import { createSlice } from '@reduxjs/toolkit';
import { extraActions } from '@src/store/redux/utils/createExtraReducers';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const app = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.purge.type, () => initialState);
  },
});
