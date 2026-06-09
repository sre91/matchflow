import { useEffect } from "react";

import MatchCard from "../features/match/components/MatchCard";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import { addMatch, removeMatch } from "../features/match/MatchSlice";

import { fetchMatches } from "../features/match/matchThunks";

function MatchesPage() {
  const dispatch = useAppDispatch();

  const { matches, loading, error } = useAppSelector((state) => state.match);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const handleAddMatch = () => {
    dispatch(
      addMatch({
        id: Date.now(),
        teamA: "GT",
        teamB: "SRH",
      }),
    );
  };

  if (loading) {
    return <h2 className="text-xl">Loading Matches...</h2>;
  }

  if (error) {
    return <h2 className="text-xl text-red-500">{error}</h2>;
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">🏏 Live Matches</h1>

      <button
        onClick={handleAddMatch}
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Add Match
      </button>

      <div className="grid gap-4">
        {matches.map((match) => (
          <div key={match.id}>
            <MatchCard
              teamA={match.teamA}
              teamB={match.teamB}
              score="145/3"
              overs="16.2"
            />

            <button
              onClick={() => dispatch(removeMatch(match.id))}
              className="mt-2 rounded bg-red-500 px-3 py-1 text-white"
            >
              Delete Match
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchesPage;
