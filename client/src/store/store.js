import { configureStore } from "@reduxjs/toolkit";
import splashReducer from "./SplashSlice/SplashSlice";
export const store = configureStore({
  reducer: {
    splash: splashReducer,
  },
});
