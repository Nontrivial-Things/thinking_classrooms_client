export interface SearchInputProps {
  suggestions: Array<string>;
}

export interface SuggestionsProps {
  filteredSuggestions: Array<string>;
  activeSuggestionIndex: number;
}
