import { useState, useEffect } from "react";
import { fetchFixtures } from "./data/bbcApi";
import { Chart } from "./components/Chart";
import "./App.css";
import type { RunningTotalItem } from "./types/models";

function App() {
  const [teams, setTeams] = useState<any[]>([]);
  const [seasons, setSeasons] = useState<any[]>([]);
  const [results, setResults] = useState<number[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [selectedSeason, setSelectedSeason] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // useEffect(() => {
  //   setLoading(true);
  //   fetchTeams()
  //     .then(data => {
  //       setTeams(data.teams || []);
  //       if (data.teams && data.teams.length > 0) {
  //         setSelectedTeam(data.teams[0].id);
  //       }
  //     })
  //     .catch(() => setError("Failed to load teams"))
  //     .finally(() => setLoading(false));
  // }, []);

  // useEffect(() => {
  //   if (!selectedTeam) return;
  //   setLoading(true);
  //   fetchSeasons(selectedTeam)
  //     .then(data => {
  //       setSeasons(data.seasons || []);
  //       if (data.seasons && data.seasons.length > 0) {
  //         setSelectedSeason(data.seasons[0].id);
  //       }
  //     })
  //     .catch(() => setError("Failed to load seasons"))
  //     .finally(() => setLoading(false));
  // }, [selectedTeam]);

  useEffect(() => {
    // if (!selectedTeam || !selectedSeason) return;
    setLoading(true);

    const teamName = "bristol-city";
    const teamNameUrn = `urn:bbc:sportsdata:football:team:${teamName}`;
    const tournamentName = "Championship";

    const selectedStartDate = "2024-08-01";
    const selectedEndDate = "2025-06-01";

    // fetchResults(selectedTeam, selectedSeason)
    fetchFixtures(teamNameUrn, selectedStartDate, selectedEndDate)
      .then(fixtures => {
        if (!fixtures) {
          setError("No results found for the selected team and season.");
          return;
        }

        // let teamPointsRunning = 0;
        let teamPointsRunningForChart = 0;

        const runningTotalData: RunningTotalItem[] = [
          // { name: "2017", react: 32, angular: 37, vue: 60 },
          // { name: "2018", react: 42, angular: 42, vue: 54 },
          // { name: "2019", react: 51, angular: 41, vue: 54 },
          // { name: "2020", react: 60, angular: 37, vue: 28 },
          // { name: "2021", react: 51, angular: 31, vue: 27 },
          // { name: "2022", react: 95, angular: 44, vue: 49 },
          // { name: "2023", react: 73, angular: 31, vue: 42 },
          // { name: "2024", react: 69, angular: 27, vue: 50 },
        ];

        runningTotalData.push({ match: 0, result: ``, value: 0 });

        let nameForChartIndex = 0;

        const teamPointsItems = fixtures.eventGroups.map((eventGroup) => {
          const event = eventGroup.secondaryGroups[0].events[0];
          let teamPointsForChart = 0;

          const isLeagueMatch = eventGroup.secondaryGroups[0].displayLabel === tournamentName;

          if (isLeagueMatch && event.status === "PostEvent") {
            if (event.winner === "home" && event.home.urn === teamNameUrn) {
              teamPointsForChart = 3;
            }
            if (event.winner === "away" && event.away.urn === teamNameUrn) {
              teamPointsForChart = 3;
            }
            if (event.winner === "draw") {
              teamPointsForChart = 1;
            }
            teamPointsRunningForChart += teamPointsForChart;

            runningTotalData.push({ match: ++nameForChartIndex, result: `${event.home.fullName} ${event.home.score} -  ${event.away.score} ${event.away.fullName}`, value: teamPointsRunningForChart });

            return teamPointsRunningForChart;
          }

        });

        // Assume data.results is an array of match objects with a 'points' property
        // setResults(data.results.map((r: any) => r.points));

        const relevantResults = teamPointsItems.filter((points) => points !== undefined);
        setResults(relevantResults);
      })
      .catch(() => setError("Failed to load results"))
      .finally(() => setLoading(false));
  }, [selectedTeam, selectedSeason]);

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h1>Football Stats</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>
          Team:
          <select value={selectedTeam} onChange={e => setSelectedTeam(e.target.value)}>
            {teams.map(team => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: 16 }}>
          Season:
          <select value={selectedSeason} onChange={e => setSelectedSeason(e.target.value)}>
            {seasons.map(season => (
              <option key={season.id} value={season.id}>{season.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div style={{ marginTop: 32 }}>
        {loading ? <p>Loading...</p> : results.length > 0 ? <Chart points={results} /> : <p>No data available.</p>}
      </div>
    </div>
  );
}

export default App;
