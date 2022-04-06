import { configureStore } from "@reduxjs/toolkit";
import splashReducer from "./SplashSlice/SplashSlice";
import userReducer from "./User/UserSlice";
import movementsReducer from "./MovementsToast/MovementsToast";
export const store = configureStore({
  reducer: {
    splash: splashReducer,
    users: userReducer,
    movements: movementsReducer,
  },
});
