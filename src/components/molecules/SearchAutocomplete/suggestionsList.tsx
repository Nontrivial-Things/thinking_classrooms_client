import { FC, useRef } from "react";
import { SuggestionsProps } from "./interface";
import Tag from "../../atoms/Tag";
import { SuggestionType } from "../../organisms/ProblemSearchSection/interface";
import * as S from "./styles";

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
      aria-label="search-input-label"
      role="listbox"
    >
      {filteredSuggestions.map((suggestion, index) => (
        <S.Suggestion
          key={suggestion.id}
          onClick={() => chooseSuggestion(suggestion)}
          isSelected={index === activeSuggestionIndex}
        >
          {suggestion.type === SuggestionType.TAG ? (
            <>
              <S.TagSearchIcon aria-label="Ikona wyszukiwania po tagu" />
              <Tag text={suggestion.title} fontSize="1.4rem" />
            </>
          ) : (
            <>
              <S.ClipboardIcon />
              <span>{suggestion.title}</span>
            </>
          )}
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
