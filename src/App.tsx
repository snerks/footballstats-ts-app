import { useState, useEffect } from "react";
import { fetchFixtures } from "./data/bbcApi";
import { Chart } from "./components/Chart";
import "./App.css";
import type { PointsInfo, RunningTotalItem } from "./types/models";

function App() {
  const [teams, setTeams] = useState<any[]>([]);
  const [seasons, setSeasons] = useState<any[]>([]);
  const [results, setResults] = useState<PointsInfo[]>([]);
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

  useEffect(() => {
    // This is a placeholder for fetching teams. Replace with actual fetch logic.
    const mockTeams = [
      // // { id: "bristol-city", name: "Bristol City" },
      // { id: "manchester-united", name: "Manchester United" },
      // { id: "liverpool", name: "Liverpool" },
      // { id: "chelsea", name: "Chelsea" },
      // { id: "arsenal", name: "Arsenal" },
      // { id: "tottenham", name: "Tottenham Hotspur" },
      // { id: "manchester-city", name: "Manchester City" },
      // { id: "everton", name: "Everton" },
      // { id: "newcastle-united", name: "Newcastle United" },
      // { id: "west-ham-united", name: "West Ham United" },
      // { id: "leicester-city", name: "Leicester City" },
      // { id: "aston-villa", name: "Aston Villa" },
      // { id: "southampton", name: "Southampton" },
      // { id: "brighton-and-hove-albion", name: "Brighton & Hove Albion" },
      // { id: "crystal-palace", name: "Crystal Palace" },
      // // { id: "burnley", name: "Burnley" },
      // // { id: "sheffield-united", name: "Sheffield United" },
      // { id: "nottingham-forest", name: "Nottingham Forest" },
      // { id: "fulham", name: "Fulham" },
      // { id: "brentford", name: "Brentford" },
      // { id: "wolverhampton-wanderers", name: "Wolverhampton Wanderers" },
      // { id: "afc-bournemouth", name: "AFC Bournemouth" },
      // { id: "ipswich-town", name: "Ipswich Town" },
      { id: "leeds-united", name: "Leeds United" },
      { id: "burnley", name: "Burnley" },
      { id: "sheffield-united", name: "Sheffield United" },
      { id: "sunderland", name: "Sunderland" },
      { id: "coventry-city", name: "Coventry City" },
      { id: "bristol-city", name: "Bristol City" },
      { id: "blackburn-rovers", name: "Blackburn Rovers" },
      { id: "millwall", name: "Millwall" },
      { id: "west-bromwich-albion", name: "West Bromwich Albion" },
      { id: "middlesbrough", name: "Middlesbrough" },
      { id: "swansea-city", name: "Swansea City" },
      { id: "sheffield-wednesday", name: "Sheffield Wednesday" },
      { id: "norwich-city", name: "Norwich City" },
      { id: "watford", name: "Watford" },
      { id: "queens-park-rangers", name: "Queens Park Rangers" },
      { id: "portsmouth", name: "Portsmouth" },
      { id: "oxford-united", name: "Oxford United" },
      { id: "stoke-city", name: "Stoke City" },
      { id: "derby-county", name: "Derby County" },
      { id: "preston-north-end", name: "Preston North End" },
      { id: "hull-city", name: "Hull City" },
      { id: "luton-town", name: "Luton Town" },
      { id: "plymouth-argyle", name: "Plymouth Argyle" },
      { id: "cardiff-city", name: "Cardiff City" },

      // { id: "birmingham-city", name: "Birmingham City" },
      // { id: "blackpool", name: "Blackpool" },
      // { id: "bristol-rovers", name: "Bristol Rovers" },
      // { id: "swindon-town", name: "Swindon Town" },
      // { id: "wigan-athletic", name: "Wigan Athletic" },
      // { id: "barnsley", name: "Barnsley" },
      // { id: "huddersfield-town", name: "Huddersfield Town" },
      // { id: "stoke-city", name: "Stoke City" },
      // { id: "bournemouth", name: "Bournemouth" },

    ];
    setTeams(mockTeams);
    if (mockTeams.length > 0) {
      setSelectedTeam(mockTeams[0].id);
    }
  }, []);

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
    // This is a placeholder for fetching seasons. Replace with actual fetch logic.
    const mockSeasons = [
      { id: "2024-2025", name: "2024-25" },
      { id: "2023-2024", name: "2023-24" },
      { id: "2022-2023", name: "2022-23" },
      { id: "2021-2022", name: "2021-22" },
      { id: "2020-2021", name: "2020-21" },
    ];
    setSeasons(mockSeasons);
    if (mockSeasons.length > 0) {
      setSelectedSeason(mockSeasons[0].id);
    }
  }, []);

  const tournamentName = "Championship";  // "Premier League"; // "Championship";

  useEffect(() => {
    // if (!selectedTeam || !selectedSeason) return;
    setLoading(true);

    // const teamName = "bristol-city";
    const teamName = selectedTeam;

    const teamNameUrn = `urn:bbc:sportsdata:football:team:${teamName}`;

    const selectedSeasonYearStart = selectedSeason.split("-")[0]; // Extract the year from the season ID
    const selectedSeasonYearEnd = selectedSeason.split("-")[1]; // Extract the year from the season ID

    const selectedStartDate = `${selectedSeasonYearStart}-08-01`;
    const selectedEndDate = `${selectedSeasonYearEnd}-06-01`;

    // fetchResults(selectedTeam, selectedSeason)
    fetchFixtures(teamNameUrn, selectedStartDate, selectedEndDate)
      .then(fixtures => {
        if (!fixtures) {
          setError("No results found for the selected team and season.");
          return;
        }

        setError("");

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

            return { points: teamPointsRunningForChart, message: `${event.home.fullName} ${event.home.score} -  ${event.away.score} ${event.away.fullName}` };
          }

        });

        // Assume data.results is an array of match objects with a 'points' property
        // setResults(data.results.map((r: any) => r.points));

        const relevantResults: PointsInfo[] = teamPointsItems.filter((item) => !!item && item.points !== undefined).filter((item) => !!item);
        relevantResults.unshift({ points: 0, message: "" }); // Add initial point for the start of the season

        setResults(relevantResults);
      })
      .catch(() => setError("Failed to load results"))
      .finally(() => setLoading(false));
  }, [selectedTeam, selectedSeason]);

  return (
    <div style={{ maxWidth: 1200, margin: "2rem auto" }}>
      <h3>{tournamentName} - Points - Running Total</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>
          <span style={{ marginRight: 8 }}>Team:</span>
          <select value={selectedTeam} onChange={e => setSelectedTeam(e.target.value)} style={{ fontSize: 16, padding: 4 }}>
            {teams.map(team => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: 16 }}>
          <span style={{ marginRight: 8 }}>Season:</span>
          <select value={selectedSeason} onChange={e => setSelectedSeason(e.target.value)} style={{ fontSize: 16, padding: 4 }}>
            {seasons.map(season => (
              <option key={season.id} value={season.id}>{season.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div style={{ marginTop: 32 }}>
        {loading ? <p>Loading...</p> : results.length > 0 ? <Chart pointsInfoItems={results} /> : <p>No data available.</p>}
      </div>
    </div>
  );
}

export default App;
