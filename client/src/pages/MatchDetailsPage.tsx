import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateMatch } from "../features/match/MatchSlice";
import type { Match } from "../features/match/MatchSlice";
import { socket } from "../socket";

const MatchDetailsPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const matches = useAppSelector((state) => state.match.matches);

  const match = matches.find((match) => match._id === id);

  useEffect(() => {
    if (!id) return;

    // Join this match room
    socket.emit("joinMatch", id);

    // Listen for realtime updates
    const handleScoreUpdate = (updatedMatch: Match) => {
      dispatch(updateMatch(updatedMatch));
    };

    socket.on("scoreUpdated", handleScoreUpdate);

    // Cleanup
    return () => {
      socket.off("scoreUpdated", handleScoreUpdate);
    };
  }, [id, dispatch]);

  if (!match) {
    return <h2>Match not found</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h1>🏏 MatchFlow</h1>

      <h2>
        {match.teamA} vs {match.teamB}
      </h2>

      <h3
        style={{
          color: match.status === "live" ? "red" : "green",
        }}
      >
        {match.status.toUpperCase()}
      </h3>

      <h1
        style={{
          fontSize: "48px",
        }}
      >
        {match.runs}/{match.wickets}
      </h1>

      <h2>{match.overs} Overs</h2>
    </div>
  );
};

export default MatchDetailsPage;
