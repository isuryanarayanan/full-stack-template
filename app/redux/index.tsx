import { configureStore } from "@reduxjs/toolkit";
import global from "./global";

const Store = configureStore({
  reducer: {
    global: global,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type Store = typeof Store;
export type State = ReturnType<typeof Store.getState>;
export type Dispatch = typeof Store.dispatch;
export default Store;
