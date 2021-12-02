import { FC, useRef } from "react";
import { SuggestionsProps } from "./interface";
import * as S from "./styles";
import { ReactComponent as Clipboard } from "../../../assets/img/icons/clipboard.svg";

const SuggestionsList: FC<SuggestionsProps> = ({
  filteredSuggestions,
  activeSuggestionIndex,
  chooseSuggestion,
}) => {
  const ref = useRef<HTMLUListElement>(null);

  return filteredSuggestions.length ? (
    <S.SuggestionList
      ref={ref}
      id="autocomplete-options"
      aria-labelledby="search-input-label"
      role="listbox"
    >
      {filteredSuggestions.map((suggestion: string, index: number) => (
        <S.Suggestion
          key={suggestion}
          onClick={() => chooseSuggestion(suggestion)}
          isSelected={index === activeSuggestionIndex}
        >
          <Clipboard style={{ paddingRight: "0.5em" }} />
          <span data-test-id="suggestion-text">{suggestion}</span>
        </S.Suggestion>
      ))}
    </S.SuggestionList>
  ) : (
    <div>
      <em>Brak wyników</em>
    </div>
  );
};

export default SuggestionsList;
