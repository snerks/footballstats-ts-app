import type { Team } from "../types";

export const teams: Team[] = [
  {
    name: {
      fullName: "Manchester United",
      linkText: "",
    },
    seasons: [
      { year: "2022/23", games: [2, 1, 3, 0, 2, 4, 1, 2, 3, 1] },
      { year: "2023/24", games: [1, 2, 2, 3, 1, 0, 2, 1, 4, 2] },
    ],
  },
  {
    name: {
      fullName: "Liverpool",
      linkText: "",
    },
    seasons: [
      { year: "2022/23", games: [3, 2, 1, 4, 2, 1, 3, 2, 1, 2] },
      { year: "2023/24", games: [2, 3, 1, 2, 3, 2, 1, 3, 2, 1] },
    ],
  },
];
