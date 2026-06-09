import MatchCard from "../features/match/components/MatchCard";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addMatch, removeMatch } from "../features/match/MatchSlice";

function MatchesPage() {
  const dispatch = useAppDispatch();

  const matches = useAppSelector((state) => state.match.matches);

  const handleAddMatch = () => {
    dispatch(
      addMatch({
        id: Date.now(),
        teamA: "GT",
        teamB: "SRH",
      }),
    );
  };

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
