import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";

export interface ProblemSearchSectionProps {
  problems: ProblemSummaryProps[];
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
