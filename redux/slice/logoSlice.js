import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { api } from "../../Component/Axios";
const initialState = {
  response: "",
  status: "idle",
  error: [],
};

export const LogoSlice = createAsyncThunk("LogoSlice", async (payload, thunkAPI) => {
  try {
    const response = await api({
      method: "post",
      url: "logo/logo_list",
    });
    let data = await response.data;
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const Logoslice = createSlice({
  name: "Logoslice",
  initialState,

  reducers: {
    Logostatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(LogoSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(LogoSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = action.payload;
        state.error = "";
      })
      .addCase(LogoSlice.rejected, (state, action) => {
        state.status = "failed";
        state.response = "";
        state.error = action.payload.response.data;
      });
  },
});

export const {Logostatus} = Logoslice.actions;

export const Logostate = (state) => state.logo;

export default Logoslice.reducer;
