import { ProblemSummaryProps } from "../../molecules/SearchResultTile/interface";

export interface ProblemSearchSectionProps {
  tag: string;
  searchTerm: string;
  setTag: (tag: string) => void;
  setProblems: (problems: ProblemSummaryProps[]) => void;
  setSearchTerm: (searchTerm: string) => void;
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
