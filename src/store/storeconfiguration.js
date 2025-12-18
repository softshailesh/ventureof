import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import documentReducer from "./slice/documentSlice";
import profileReducer from "./slice/profileSlice";
import changePasswordReducer from "./slice/changePasswordSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
     documents: documentReducer,
     profile: profileReducer,
      changePassword: changePasswordReducer,
  },
});
