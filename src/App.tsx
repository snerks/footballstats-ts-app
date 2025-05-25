import { useState, useEffect } from "react";
import { teams } from "./data/teams";
import { TeamSelector } from "./components/TeamSelector";
import { SeasonSelector } from "./components/SeasonSelector";
import { Chart } from "./components/Chart";
import "./App.css";

function App() {
  const [selectedTeam, setSelectedTeam] = useState(teams[0].name);
  const [selectedSeason, setSelectedSeason] = useState(teams[0].seasons[0].year);

  const team = teams.find(t => t.name === selectedTeam);
  const season = team?.seasons.find(s => s.year === selectedSeason);

  useEffect(() => {
    if (team && !team.seasons.some(s => s.year === selectedSeason)) {
      setSelectedSeason(team.seasons[0].year);
    }
  }, [selectedTeam]);

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h1>Football Stats</h1>
      <div>
        <label>
          Team: <TeamSelector value={selectedTeam} onChange={setSelectedTeam} />
        </label>
        <label style={{ marginLeft: 16 }}>
          Season: <SeasonSelector team={selectedTeam} value={selectedSeason} onChange={setSelectedSeason} />
        </label>
      </div>
      <div style={{ marginTop: 32 }}>
        {season ? <Chart points={season.games} /> : <p>No data available.</p>}
      </div>
    </div>
  );
}

export default App;
