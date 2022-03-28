import { configureStore } from "@reduxjs/toolkit";
import splashReducer from "./SplashSlice/SplashSlice";
import userReducer from "./User/UserSlice";
export const store = configureStore({
  reducer: {
    splash: splashReducer,
    users: userReducer,
  },
});
