// Utility to fetch football data from BBC Sports Results and Fixtures API
// Note: The actual BBC API is not public. This is a placeholder for demonstration.
// Replace the URLs and parsing logic with the real API endpoints and structure if available.

import type { Fixtures } from "../types/models";

export async function fetchTeams() {
  // Example endpoint (replace with real BBC endpoint)
  const res = await fetch("https://api.bbc.com/sport/football/teams");
  if (!res.ok) throw new Error("Failed to fetch teams");
  return res.json();
}

export async function fetchSeasons(teamId: string) {
  // Example endpoint (replace with real BBC endpoint)
  const res = await fetch(
    `https://api.bbc.com/sport/football/teams/${teamId}/seasons`
  );
  if (!res.ok) throw new Error("Failed to fetch seasons");
  return res.json();
}

export async function fetchResults(teamId: string, seasonId: string) {
  // Example endpoint (replace with real BBC endpoint)
  const res = await fetch(
    `https://api.bbc.com/sport/football/teams/${teamId}/seasons/${seasonId}/results`
  );
  if (!res.ok) throw new Error("Failed to fetch results");
  return res.json();
}

export async function fetchFixtures(
  teamNameUrn: string,
  selectedStartDate: string,
  selectedEndDate: string
): Promise<Fixtures | null> {
  try {
    const fetchUrl = `https://web-cdn.api.bbci.co.uk/wc-poll-data/container/sport-data-scores-fixtures?selectedEndDate=${selectedEndDate}&selectedStartDate=${selectedStartDate}&todayDate=2025-03-17&urn=${teamNameUrn}`;
    const response = await fetch(fetchUrl);

    const data = await response.json();
    const fixtures = data as Fixtures;
    return fixtures;
    // setFixtures(fixtures);
  } catch (error) {
    // setHasError(true);
    console.error("Error fetching fixtures:", error);
  }
  return null;
}
