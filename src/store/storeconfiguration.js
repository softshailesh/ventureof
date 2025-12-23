import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import documentReducer from "./slice/documentSlice";
import profileReducer from "./slice/profileSlice";
import changePasswordReducer from "./slice/changePasswordSlice";
import contactReducer from "./slice/contactSlice";
import adminDashboardReducer from "./slice/adminDashboardSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    documents: documentReducer,
    profile: profileReducer,
    changePassword: changePasswordReducer,
    contact: contactReducer,
    adminDashboard: adminDashboardReducer,
  },
});
