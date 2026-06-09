import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Match = {
  id: number;
  teamA: string;
  teamB: string;
};

type MatchState = {
  matches: Match[];
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
  },
});

export const { addMatch, removeMatch } = matchSlice.actions;

export default matchSlice.reducer;
