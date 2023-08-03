import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../common/Axios";


const initialState = {
  response:'',
  status: "idle",
  error:[]
};

export const IconSlice = createAsyncThunk(
    "IconSlice",
    async ( thunkAPI) => {
      try {
        const response = await axios({
          method: "get",
          url: 'icon/icon_list',
          headers:{ 
            'Access-Control-Allow-Origin': '*' ,
            'Accept': 'application/json',
          }
        });
        let data = await response.data;  
          return data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

export const Iconslice = createSlice({
  name: "Iconslice",
  initialState,

  reducers: {
    Iconstatus:(state) => {
      state.status = 'idle'
    },
  },
  extraReducers(builder) {
    builder
      .addCase(IconSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(IconSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = action.payload
        state.error = ''
      })
      .addCase(IconSlice.rejected, (state, action) => {
        state.status = "failed";
        state.response = ''
        state.error = action.payload.response.data;
      });
  },
});

export const { Iconstatus } = Iconslice.actions;

export const Iconstate = (state) => state.icon;

export default Iconslice.reducer;

