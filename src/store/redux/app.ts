import { createSlice } from "@reduxjs/toolkit";
import { extraActions } from "@src/store/redux/utils/createExtraReducers";

export interface AppState {
  value: number;
  userProfile: {
    username: string;
    accessToken: string;
  };
}

const initialState: AppState = {
  value: 0,
  userProfile: {
    accessToken: "",
    username: "",
  },
};

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    updateProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    deleteProfile: (state) => {
      state.userProfile = {
        accessToken: "",
        username: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.purge.type, () => initialState);
  },
});
