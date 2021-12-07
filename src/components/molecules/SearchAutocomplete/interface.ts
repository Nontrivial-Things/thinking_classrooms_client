// export interface SearchAutocompleteProps {
//   suggestions: Array<string>;
// }

import { Suggestion } from "../../organisms/ProblemSearchSection/interface";

export interface SuggestionsProps {
  filteredSuggestions: Array<Suggestion>;
  activeSuggestionIndex: number;
  chooseSuggestion: (suggestion: string) => void;
}

export interface SuggestionProps {
  isSelected?: boolean;
}

export interface InputStyleProps {
  showSuggestions: boolean;
}
