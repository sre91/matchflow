type MatchCardProps = {
  teamA: string;
  teamB: string;
  score: string;
  overs: string;
};

function MatchCard({ teamA, teamB, score, overs }: MatchCardProps) {
  return (
    <div className="rounded-xl border p-5 shadow-md hover:shadow-xl transition">
      <h2 className="text-xl font-bold">
        {teamA} vs {teamB}
      </h2>

      <p>Score: {score}</p>

      <p>Overs: {overs}</p>
    </div>
  );
}

export default MatchCard;
