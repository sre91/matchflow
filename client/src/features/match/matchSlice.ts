import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { fetchMatches } from "./matchThunks";

export type Match = {
  id: number;
  teamA: string;
  teamB: string;
};

type MatchState = {
  matches: Match[];
  loading: boolean;
  error: string | null;
};

const initialState: MatchState = {
  matches: [
    {
      id: 1,
      teamA: "CSK",
      teamB: "MI",
    },
    {
      id: 2,
      teamA: "RCB",
      teamB: "KKR",
    },
  ],

  loading: false,

  error: null,
};

const matchSlice = createSlice({
  name: "match",

  initialState,

  reducers: {
    addMatch: (state, action: PayloadAction<Match>) => {
      state.matches.push(action.payload);
    },

    removeMatch: (state, action: PayloadAction<number>) => {
      state.matches = state.matches.filter(
        (match) => match.id !== action.payload,
      );
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.matches = action.payload;
      })

      .addCase(fetchMatches.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch matches";
      });
  },
});

export const { addMatch, removeMatch, setLoading, setError } =
  matchSlice.actions;

export default matchSlice.reducer;
