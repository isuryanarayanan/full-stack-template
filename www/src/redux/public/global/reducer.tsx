import { createSlice } from "@reduxjs/toolkit";
import globalState from "./state";

function initialState(): globalState {
  return {
    mode: 'dark',
    error: null,
    loading: false,
    developmentUrl:"https://development-glitchh2.s3.amazonaws.com/media/",
    productionUrl:"https://api-production-media.s3.amazonaws.com/media/"
  }
}

export const moduleName = "global";

export const globalSlice = createSlice({
  name: moduleName,
  initialState: initialState(),
  reducers: {
    setIsLoadingTrue:(state)=>{
      state.loading = true
      
    },
    setIsLoadingFalse:(state)=>{
      state.loading = false
    }
  },
});
