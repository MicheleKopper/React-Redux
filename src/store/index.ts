import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./modules/counterSlice";
// import { counterReducer } from "./modules/counterSlice";

export const store = configureStore({
  reducer: {
    // key: value
    // counter: counterReducer,
    financeiro: counterReducer // Nome do slice e do reducer
  },
});

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
