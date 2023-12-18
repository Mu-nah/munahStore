import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
