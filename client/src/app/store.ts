import { configureStore } from "@reduxjs/toolkit";
import matchReducer from "../features/match/MatchSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    match: matchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
