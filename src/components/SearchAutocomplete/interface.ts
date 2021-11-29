export interface SearchAutocompleteProps {
  suggestions: Array<string>;
}

export interface SuggestionsProps {
  filteredSuggestions: Array<string>;
  activeSuggestionIndex: number;
  chooseSuggestion: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export interface SuggestionProps {
  isSelected?: boolean;
}
