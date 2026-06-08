import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

export default matchSlice.reducer;
