import { FC, useRef } from "react";
import { useTranslation } from "react-i18next";

import { SuggestionsProps } from "./interface";
import Tag from "../../atoms/Tag";
import { SuggestionType } from "../../organisms/ProblemSearchSection/interface";
import * as S from "./styles";

const SuggestionsList: FC<SuggestionsProps> = ({
  filteredSuggestions,
  activeSuggestionIndex,
  chooseSuggestion,
}) => {
  const { t } = useTranslation("", { keyPrefix: "common" });
  const ref = useRef<HTMLUListElement>(null);

  return (
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
              <S.TagSearchIcon aria-label={t("searchByTagIcon")} />
              <Tag text={suggestion.title} fontSize="1.4rem" />
            </>
          ) : (
            <S.ProblemLink to={`/problems/${suggestion.id}`}>
              <S.ClipboardIcon />
              <span>{suggestion.title}</span>
            </S.ProblemLink>
          )}
        </S.Suggestion>
      ))}
    </S.SuggestionList>
  );
};

export default SuggestionsList;
