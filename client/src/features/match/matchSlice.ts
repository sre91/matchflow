import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { fetchMatches } from "./matchThunks";

export type Match = {
  _id: string;
  teamA: string;
  teamB: string;
  status: "upcoming" | "live" | "completed";
  runs: number;
  wickets: number;
  overs: number;
};

type MatchState = {
  matches: Match[];
  loading: boolean;
  error: string | null;
};

const initialState: MatchState = {
  matches: [
    {
      _id: "1",
      teamA: "CSK",
      teamB: "MI",
      status: "live",
      runs: 120,
      wickets: 2,
      overs: 15,
    },
    {
      _id: "2",
      teamA: "RCB",
      teamB: "KKR",
      status: "upcoming",
      runs: 0,
      wickets: 0,
      overs: 0,
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

    updateMatch: (state, action: PayloadAction<Match>) => {
      const index = state.matches.findIndex(
        (match) => match._id === action.payload._id,
      );

      if (index !== -1) {
        state.matches[index] = action.payload;
      }
    },

    removeMatch: (state, action: PayloadAction<string>) => {
      state.matches = state.matches.filter(
        (match) => match._id !== action.payload,
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

export const { addMatch, updateMatch, removeMatch, setLoading, setError } =
  matchSlice.actions;

export default matchSlice.reducer;
