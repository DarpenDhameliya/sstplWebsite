import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./common/Axios";


const initialState = {
  response:'',
  status: "idle",
  error:[]
};

export const HireusSlice = createAsyncThunk(
    "HireusSlice",
    async (payload, thunkAPI) => {
      try {
        const response = await axios({
          method: "post",
          url: '/hire/hireus',
          data:payload,
          headers:{
            'Access-Control-Allow-Origin': '*' ,
            'Accept': 'application/json'
          },
        });
        let data = await response.data;  
          return data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

export const Hireusslice = createSlice({
  name: "Hireusslice",
  initialState,

  reducers: {
    Hireusslicestatus:(state) => {
      state.status = 'idle'
    },
  },
  extraReducers(builder) {
    builder
      .addCase(HireusSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(HireusSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = action.payload
        state.error = ''
      })
      .addCase(HireusSlice.rejected, (state, action) => {
        state.status = "failed";
        state.response = ''
        state.error = action.payload.response.data;
      });
  },
});

export const { Hireusslicestatus } = Hireusslice.actions;

export const Hireusslicestate = (state) => state.hireus;

export default Hireusslice.reducer;

