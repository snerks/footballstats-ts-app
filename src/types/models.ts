export interface Fixtures {
  eventGroups: EventGroup[];
  sport: string;
  selectedStartDate: Date;
  selectedEndDate: Date;
  shouldShowScorersButton: boolean;
  urn: string;
  maximumScoreDigits: number;
}

export interface EventGroup {
  displayLabel: string;
  secondaryGroups: SecondaryGroup[];
}

export interface SecondaryGroup {
  displayLabel: string; //DisplayLabel;
  events: Event[];
}

export interface DisplayLabel {
  PremierLeague: "Premier League";
  Championship: "Championship";
  LeagueOne: "League One";
  ClubFriendliesClubFriendlies3: "Club Friendlies - Club Friendlies 3";
  FACup3RDRound: "FA Cup - 3rd Round";
  LeagueCup1StRound: "League Cup - 1st Round";
}

export interface Event {
  home: Away;
  away: Away;
  id: string;
  urn: string;
  eventGroupingLabel: EventGroupingLabel;
  startDateTime: Date;
  tournamentId: TournamentID;
  date: DateClass;
  periodLabel: PeriodLabel;
  time: TimeClass;
  status: string; //Status;
  statusComment: PeriodLabel;
  participants: Participant[];
  headToHeadDetailLabel: HeadToHeadDetailLabel;
  tournament: Tournament;
  stage?: Stage;
  winner?: string; //Winner;
  accessibleEventSummary: string;
  hasStandings: boolean;
  tipoTopicId?: string;
  onwardJourneyLink?: string;
}

export interface Away {
  id: string;
  fullName: string;
  shortName: string;
  runningScores?: RunningScores;
  scoreUnconfirmed?: string;
  actions: AwayAction[];
  score?: string;
  urn?: string;
}

export interface AwayAction {
  playerUrn: string;
  playerName: string;
  actionType: ActionType;
  actions: ActionAction[];
}

export interface ActionType {
  Card: "card";
  Goal: "goal";
}

export interface ActionAction {
  type: Type;
  typeLabel: PeriodLabel;
  timeLabel: PeriodLabel;
}

export interface PeriodLabel {
  value: string;
  accessible: string;
}

export interface Type {
  Goal: "Goal";
  Penalty: "Penalty";
  RedCard: "Red Card";
  TwoYellowCards: "Two Yellow Cards";
}

export interface RunningScores {
  fulltime: string;
  halftime?: string;
}

export interface DateClass {
  iso: Date;
  time: TimeEnum;
  shortDate: string;
  longDate: string;
  dayOfWeek: string;
  day: string;
  month: string;
  shortMonth: string;
  year: string;
  isoDate: Date;
}

export interface TimeEnum {
  The1200: "12:00";
  The1230: "12:30";
  The150: "15:00";
  The1945: "19:45";
  The2000: "20:00";
}

export interface EventGroupingLabel {
  EnglandChampionship: "England - Championship";
  EnglandFACup3RDRound: "England - FA Cup - 3rd Round";
  EnglandLeagueCup1StRound: "England - League Cup - 1st Round";
  WorldClubFriendliesClubFriendlies3: "World - Club Friendlies - Club Friendlies 3";
}

export interface HeadToHeadDetailLabel {
  Championship: "Championship";
  ClubFriendlies: "Club Friendlies";
  EnglandChampionship: "England - Championship";
  FACup: "FA Cup";
  LeagueCup: "League Cup";
}

export interface Participant {
  id: string;
  urn?: string;
  name: Name;
  score?: string;
  fulltimeScore?: string;
  alignment: Winner;
  halftimeScore?: string;
}

export interface Winner {
  Away: "away";
  Draw: "draw";
  Home: "home";
}

export interface Name {
  fullName: string;
  shortName: string;
}

export interface Stage {
  id: string;
  name: string;
  urn: string;
}

export interface Status {
  PostEvent: "PostEvent";
  PreEvent: "PreEvent";
}

export interface TimeClass {
  accessibleTime: TimeEnum;
  displayTimeUK: TimeEnum;
  timeCertainty: boolean;
}

export interface Tournament {
  id: TournamentID;
  name: HeadToHeadDetailLabel;
  disambiguatedName: DisambiguatedName;
  urn?: Urn;
  thingsGuid?: string;
}

export interface DisambiguatedName {
  Championship: "Championship";
  EnglishLeagueCup: "English League Cup";
  FACup: "FA Cup";
  Friendly: "Friendly";
}

export interface TournamentID {
  The2Hj3286Pqov1G1G59K2T2Qcgm: "2hj3286pqov1g1g59k2t2qcgm";
  The4Nidzmunvpvxk1Ir9B6M8Mpay: "4nidzmunvpvxk1ir9b6m8mpay";
  The725Gd73Msyt08Xm76V7Gkxj7U: "725gd73msyt08xm76v7gkxj7u";
  The7Ntvbsyq31Jnzoqoa8850B9B8: "7ntvbsyq31jnzoqoa8850b9b8";
}

export interface Urn {
  UrnBbcSportsdataFootballTournamentChampionship: "urn:bbc:sportsdata:football:tournament:championship";
  UrnBbcSportsdataFootballTournamentFaCup: "urn:bbc:sportsdata:football:tournament:fa-cup";
  UrnBbcSportsdataFootballTournamentLeagueCup: "urn:bbc:sportsdata:football:tournament:league-cup";
}

export interface RunningTotalItem {
  match: number;
  result: string;
  value: number;
}

export interface PointsInfo {
	points: number;
	message: string;
}