import React, { FC, useRef } from "react";
import { SuggestionsProps } from "./interface";
import { SuggestionList, Suggestion } from "./styledComponents";
import { ReactComponent as Clipboard } from "../../assets/img/icons/clipboard.svg";

const SuggestionsListComponent: FC<SuggestionsProps> = ({
  filteredSuggestions,
  activeSuggestionIndex,
  chooseSuggestion,
}) => {
  const ref = useRef<any>(); //I didn't find proper type for this one.

  return filteredSuggestions.length ? (
    <SuggestionList ref={ref}>
      {filteredSuggestions.map((suggestion: string, index: number) => {
        if (index === activeSuggestionIndex) {
          return (
            <Suggestion
              key={suggestion}
              onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                chooseSuggestion(e)
              }
              isSelected
            >
              <Clipboard style={{ paddingRight: "0.5em" }} />
              <span data-test-id="suggestion-text">{suggestion}</span>
            </Suggestion>
          );
        }
        return (
          <Suggestion
            key={suggestion}
            onClick={(e: React.MouseEvent<HTMLLIElement>) =>
              chooseSuggestion(e)
            }
          >
            <Clipboard style={{ paddingRight: "0.5em" }} />
            <span data-test-id="suggestion-text">{suggestion}</span>
          </Suggestion>
        );
      })}
    </SuggestionList>
  ) : (
    <div>
      <em>Brak wyników</em>
    </div>
  );
};

export default SuggestionsListComponent;
