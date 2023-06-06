import { createSlice } from "@reduxjs/toolkit";

import { ENDPOINTS } from "./endpoints";

export const moduleName = "global";

export const slice = createSlice({
  name: moduleName,
  initialState: ENDPOINTS,
  reducers: {
    setRoot: (state, action) => {
      state.BACKEND.ROOT = action.payload;
    },
  },
});

export const { setRoot } = slice.actions;

export default slice.reducer;
