export type TeamSeason = {
  year: string;
  games: number[];
};

export type Team = {
  // name: string;
  name: TeamNameInfo;
  seasons: TeamSeason[];
};

export type TeamNameInfo = {
  linkText: string;
  fullName: string;
};

export const defaultTeamNameInfo: TeamNameInfo = {
  linkText: "bristol-city",
  fullName: "Bristol City",
};

export const competitionNames = [
  "premier-league",
  "championship",
  "league-one",
  "league-two",
  "scottish-premiership",
  "spanish-la-liga",
];

export const minimumYear = 2017;
export const maximumYear = 2022;
