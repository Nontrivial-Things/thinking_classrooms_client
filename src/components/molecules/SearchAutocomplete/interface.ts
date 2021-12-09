import { Suggestion } from "../../organisms/ProblemSearchSection/interface";

export interface SearchAutocompleteProps {
  setTag: (tag: string) => void;
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
