export interface SearchAutocompleteProps {
  suggestions: Array<string>;
}

export interface SuggestionsProps {
  filteredSuggestions: Array<string>;
  activeSuggestionIndex: number;
  chooseSuggestion: (suggestion: string) => void;
}

export interface SuggestionProps {
  isSelected?: boolean;
}
