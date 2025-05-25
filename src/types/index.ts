export type TeamSeason = {
  year: string;
  games: number[];
};

export type Team = {
  name: string;
  seasons: TeamSeason[];
};
