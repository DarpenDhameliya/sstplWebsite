import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../common/Axios";
const initialState = {
  response:'',
  status: "idle",
  error:[]
};
export const ServiceSlice = createAsyncThunk(
    "ServiceSlice",
    async (payload, thunkAPI) => {
      try {
        const response = await axios({
          method: "get",
          url: `service/service_list`,
          headers:{
            'Access-Control-Allow-Origin': '*'
          },
        });
        let data = await response.data;
          return data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

export const Serviceslice = createSlice({
  name: "Serviceslice",
  initialState,

  reducers: {
    Servicestatus:(state) => {
      state.status = 'idle'
    },
  },
  extraReducers(builder) {
    builder
      .addCase(ServiceSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ServiceSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        let data = action.payload.result.sort((a ,b) => a.contentpositionview - b.contentpositionview)
        state.response = data

        state.error = ''
      })
      .addCase(ServiceSlice.rejected, (state, action) => {
        state.status = "failed";
        state.response = ''
        state.error = action.payload.response.data;
      });
  },
});

export const { Servicestatus } = Serviceslice.actions;

export const Servicestate = (state) => state.service;

export default Serviceslice.reducer;

