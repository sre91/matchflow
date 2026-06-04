import MatchCard from "../features/match/components/MatchCard";

const matches = [
  {
    id: 1,
    teamA: "CSK",
    teamB: "MI",
    score: "145/3",
    overs: "16.2",
  },
  {
    id: 2,
    teamA: "RCB",
    teamB: "KKR",
    score: "178/5",
    overs: "20.0",
  },
  {
    id: 3,
    teamA: "GT",
    teamB: "SRH",
    score: "120/2",
    overs: "14.1",
  },
];

function MatchesPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">🏏 Live Matches</h1>

      <div className="grid gap-4">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            teamA={match.teamA}
            teamB={match.teamB}
            score={match.score}
            overs={match.overs}
          />
        ))}
      </div>
    </div>
  );
}

export default MatchesPage;
