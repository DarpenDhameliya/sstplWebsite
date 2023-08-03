import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import careerReducer from "./component/website/slice/MailSlice";
import contactusReducer from "./component/website/slice/Contackus";
import hireusReducer from "./component/website/slice/HireusSlice";
import metaResucer from "./component/website/slice/Mets";
import serviceReducer from "./component/website/slice/Service";
import iconReducer from "./component/website/slice/IconSlice"

export const store = configureStore({
  reducer: {
    career: careerReducer,
    contactus: contactusReducer,
    hireus: hireusReducer,
    meta: metaResucer,
    service: serviceReducer,
    icon:iconReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
