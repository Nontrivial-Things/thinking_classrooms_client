import { Suggestion } from "../../components/organisms/ProblemSearchSection/interface";

export const sortSuggestions = (
  suggestionsBase: Suggestion[]
): Suggestion[] => {
  const suggestionsCopy = [...suggestionsBase];

  const sortedSuggestionsAlphabetically = suggestionsCopy.sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );
  sortedSuggestionsAlphabetically.sort((a, b) =>
    a.type < b.type ? 1 : a.type > b.type ? -1 : 0
  );

  return sortedSuggestionsAlphabetically;
};
