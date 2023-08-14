import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response:[],
  error:[]
};

export const Metaslice = createSlice({
  name: "Metaslice",
  initialState,

  reducers: {
    Metastatus:(state , payload) => {
      state.response = payload.payload;
    },
  },

});

export const { Metastatus } = Metaslice.actions;

export const Metastate = (state) => state.meta;

export default Metaslice.reducer;

