export enum Level {
  PRIMARY,
  SECONDARY,
  ANY,
}
export interface ProblemSummaryProps {
  title: string;
  tags: Array<string>;
  createdAt: string;
  author: string;
  level: Level;
}
