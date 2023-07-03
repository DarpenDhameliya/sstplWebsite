// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "./common/Axios";
// const initialState = {
//   response:'',
//   status: "idle",
//   error:[]
// };

// export const MailSlice = createAsyncThunk(
//     "MailSlice",
//     async (payload, thunkAPI) => {
//       try {
//         const response = await axios({
//           method: "post",
//           url: 'authers/pdf',
//           data:payload,
//           headers:{
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         let data = await response.data;  
//           console.log(data);

          
//           return data;

//       } catch (e) {
//         return thunkAPI.rejectWithValue(e);
//       }
//     }
//   );

// export const Mailslice = createSlice({
//   name: "Mailslice",
//   initialState,

//   reducers: {
//     Mailstatus:(state) => {
//       state.status = 'idle'
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(MailSlice.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(MailSlice.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         console.log(action.payload)
//         state.response = action.payload
//         state.error = ''
//       })
//       .addCase(MailSlice.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload.response.data;
//       });
//   },
// });

// export const { Mailstatus } = Mailslice.actions;

// export const Mailstate = (state) => state.mail;

// export default Mailslice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../common/Axios";
const initialState = {
  response:'',
  status: "idle",
  error:[]
};

export const CareerSlice = createAsyncThunk(
    "CareerSlice",
    async (payload, thunkAPI) => {
      try {
        const response = await axios({
          method: "post",
          url: 'authers/pdf',
          data:payload,
          headers:{
            'Access-Control-Allow-Origin': '*' ,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',

          },
        });
        let data = await response.data;  
          return data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

export const Careerslice = createSlice({
  name: "Careerslice",
  initialState,

  reducers: {
    Careerstatus:(state) => {
      state.status = 'idle'
    },
  },
  extraReducers(builder) {
    builder
      .addCase(CareerSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CareerSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = action.payload
        state.error = ''
      })
      .addCase(CareerSlice.rejected, (state, action) => {
        state.status = "failed";
        state.response = ''
        state.error = action.payload.response.data;
      });
  },
});

export const { Careerstatus } = Careerslice.actions;

export const Careerstate = (state) => state.career;

export default Careerslice.reducer;


