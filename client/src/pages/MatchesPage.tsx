import MatchCard from "../features/match/components/MatchCard";
import { useAppSelector } from "../app/hooks";
import type { Match } from "../features/match/MatchSlice";

function MatchesPage() {
  const matches: Match[] = useAppSelector((state) => state.match.matches);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">🏏 Live Matches</h1>

      <div className="grid gap-4">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            teamA={match.teamA}
            teamB={match.teamB}
            score="145/3"
            overs="16.2"
          />
        ))}
      </div>
    </div>
  );
}

export default MatchesPage;
