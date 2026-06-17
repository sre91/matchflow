import mongoose from "mongoose";

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
      default: "upcoming",
    },
  },
  {
    timestamps: true,
  },
);
const match = mongoose.model("Match", matchSchema);
export default match;
