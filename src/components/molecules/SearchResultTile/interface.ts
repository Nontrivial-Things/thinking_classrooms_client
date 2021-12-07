export enum Level {
  PRIMARY = "szkoła podstawowa",
  SECONDARY = "szkoła średnia",
  ANY = "dowolny etap edukacji",
}
export interface ProblemSummaryProps {
  title: string;
  tags: Array<string>;
  createdAt: string;
  author: string;
  level: Level;
}
