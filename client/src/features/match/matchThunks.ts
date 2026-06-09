import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMatches = createAsyncThunk(
  "match/fetchMatches",

  async () => {
    return [
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
    ];
  },
);
