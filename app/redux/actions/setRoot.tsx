import { createAsyncThunk } from "@reduxjs/toolkit";
import { moduleName } from "../global";
import { State } from "../index";

export const SET_ROOT = createAsyncThunk(
  `${moduleName}/setRoot`,
  async (payload: string, { getState, dispatch }) => {
    let state: State = getState() as State;

    switch (payload) {
      case "DEV":
        console.log("Setting root to DEV in private store");
        dispatch({
          type: `${moduleName}/setRoot`,
          payload: state.global.BACKEND.ROOT_DEV,
        });
        break;
      default:
        console.log("Invalid server type");
        break;
    }

    return false;
  }
);
