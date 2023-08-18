import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import careerReducer from "./slice/MailSlice";
import contactusReducer from "./slice/Contackus";
import hireusReducer from "./slice/HireusSlice";
import metaResucer from "./slice/Mets";
import serviceReducer from "./slice/Service";
import iconReducer from "./slice/IconSlice"
import logoReducer from './slice/logoSlice'

export const store = configureStore({
  reducer: {
    career: careerReducer,
    contactus: contactusReducer,
    hireus: hireusReducer,
    meta: metaResucer,
    service: serviceReducer,
    icon:iconReducer,
    logo:logoReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
