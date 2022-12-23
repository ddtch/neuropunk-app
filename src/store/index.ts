import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";

const rootReucer = combineReducers({
  auth: authSlice,
})

export const store = configureStore({
  reducer: rootReucer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch