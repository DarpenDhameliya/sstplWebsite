import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mailReducer from './component/MailSlice'
import contactusReducer from './component/Contackus'
import hireusReducer from './component/HireusSlice'
export const store = configureStore({
  reducer: {
    mail:mailReducer,
    contactus:contactusReducer,
    hireus:hireusReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
