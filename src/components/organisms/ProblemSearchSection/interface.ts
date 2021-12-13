import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";

export interface ProblemSearchSectionProps {
  problems: ProblemSummaryProps[];
  setTag: (tag: string) => void;
}

export enum SuggestionType {
  TAG = "tag",
  PROBLEM = "problem",
}

export interface Suggestion {
  type: SuggestionType;
  title: string;
  id: number;
}

export interface GetSuggestionsQuery {
  suggestions: Suggestion[];
}
