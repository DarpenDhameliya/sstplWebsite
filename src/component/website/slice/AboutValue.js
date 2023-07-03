import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../common/Axios";
const initialState = {
  response:'',
  status: "idle",
  error:[]
};
var token = localStorage.getItem('ssAdmin');
export const AboutValueSlice = createAsyncThunk(
    "AboutValueSlice",
    async (payload, thunkAPI) => {
      console.log(payload)
      try {
        const response = await axios({
          method: "put",
          url: `aboutvalue/aboutvalue_update/${payload.id}`,
          data:payload,
          headers:{
            'Access-Control-Allow-Origin': '*' ,
            'Content-Type': 'multipart/form-data',
            Authorization:token

          },
        });
        let data = await response.data;  
          return data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

export const Aboutvalueslice = createSlice({
  name: "Aboutvalueslice",
  initialState,

  reducers: {
    Aboutvaluestatus:(state) => {
      state.status = 'idle'
    },
  },
  extraReducers(builder) {
    builder
      .addCase(AboutValueSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AboutValueSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = action.payload
        state.error = ''
      })
      .addCase(AboutValueSlice.rejected, (state, action) => {
        state.status = "failed";
        state.response = ''
        state.error = action.payload.response.data;
      });
  },
});

export const { Aboutvaluestatus } = Aboutvalueslice.actions;

export const Aboutvaluestate = (state) => state.aboutvalue;

export default Aboutvalueslice.reducer;

