import React, { FC, useRef } from "react";
import { SuggestionsProps } from "./interface";
import { SuggestionList, Suggestion } from "./styles";
import { ReactComponent as Clipboard } from "../../assets/img/icons/clipboard.svg";

const SuggestionsListComponent: FC<SuggestionsProps> = ({
  filteredSuggestions,
  activeSuggestionIndex,
  chooseSuggestion,
}) => {
  const ref = useRef<HTMLUListElement>(null);

  return filteredSuggestions.length ? (
    <SuggestionList
      ref={ref}
      id="autocomplete-options"
      aria-labelledby="search-input-label"
      role="listbox"
    >
      {filteredSuggestions.map((suggestion: string, index: number) => (
        <Suggestion
          key={suggestion}
          onClick={() => chooseSuggestion(suggestion)}
          isSelected={index === activeSuggestionIndex}
        >
          <Clipboard style={{ paddingRight: "0.5em" }} />
          <span data-test-id="suggestion-text">{suggestion}</span>
        </Suggestion>
      ))}
    </SuggestionList>
  ) : (
    <div>
      <em>Brak wyników</em>
    </div>
  );
};

export default SuggestionsListComponent;
