import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./feature/navSlice";

export const makeStore = () => {
  return configureStore({
    reducer: navReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
