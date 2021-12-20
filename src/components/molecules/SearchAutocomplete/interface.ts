import { gql } from "@apollo/client";
import { Suggestion } from "../../organisms/ProblemSearchSection/interface";
import { ProblemSummaryProps } from "../SearchResultTile/interface";

export interface SearchAutocompleteProps {
  setTag: (tag: string) => void;
  setProblems: (problems: Array<ProblemSummaryProps>) => void;
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}

export interface SuggestionsProps {
  filteredSuggestions: Array<Suggestion>;
  activeSuggestionIndex: number;
  chooseSuggestion: (suggestion: Suggestion) => void;
}

export interface SuggestionProps {
  isSelected?: boolean;
}

export interface InputStyleProps {
  showSuggestions: boolean;
}

export const SUGGESTIONS = gql`
  query GetSuggestions {
    suggestions {
      type
      title
      id
    }
  }
`;
