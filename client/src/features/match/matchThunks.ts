import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Match } from "./MatchSlice";
import api from "../../api/axios";

export const fetchMatches = createAsyncThunk<Match[]>(
  "match/fetchMatches",

  async () => {
    const response = await api.get("/matches");

    return response.data;
  },
);
