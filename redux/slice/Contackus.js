import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../Component/Axios";
const initialState = {
  response: "",
  status: "idle",
  error: [],
};

export const ContactusSlice = createAsyncThunk("ContactusSlice", async (payload, thunkAPI) => {
  try {
    
    const response = await axios({
      method: "post",
      url: "contactus/contackusform",
      data: payload.json1,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Userdetails": payload.json2.ipAddress,
        "captchaToken":payload.json2.captchres,
      },
    });
    let data = await response.data;
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const Contactusslice = createSlice({
  name: "Contactusslice",
  initialState,

  reducers: {
    Contactusstatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(ContactusSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ContactusSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = action.payload;
        state.error = "";
      })
      .addCase(ContactusSlice.rejected, (state, action) => {
        state.status = "failed";
        state.response = "";
        state.error = action.payload.response.data;
      });
  },
});

export const {Contactusstatus} = Contactusslice.actions;

export const Contactusstate = (state) => state.contactus;

export default Contactusslice.reducer;
