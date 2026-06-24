import mongoose from "mongoose";

interface IMatch {
  teamA: string;
  teamB: string;
  status: "upcoming" | "live" | "completed";
  runs: number;
  wickets: number;
  overs: number;
}

const matchSchema = new mongoose.Schema(
  {
    teamA: {
      type: String,
      required: true,
    },

    teamB: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["upcoming", "live", "completed"],
      default: "upcoming",
    },

    runs: {
      type: Number,
      min: 0,
      default: 0,
    },

    wickets: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },

    overs: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);
const match = mongoose.model("Match", matchSchema);
export default match;
