import React, { FC, useEffect, useRef, useState, useCallback } from "react";
import { SuggestionsProps } from "./interface";
import { SuggestionList, Suggestion } from "./styledComponents";
import { ReactComponent as Clipboard } from "../../assets/img/icons/clipboard.svg";

import useRoveFocus from "../../assets/utils/onKeyPress";

const SuggestionsListComponent: FC<SuggestionsProps> = ({
  filteredSuggestions,
  activeSuggestionIndex,
  chooseSuggestion,
  setFocus,
  hasFocus,
}) => {
  const ref = useRef<any>();

  // const [hasFocus, setFocus] = useRoveFocus(filteredSuggestions.length);
  useEffect(() => {
    if (hasFocus) {
      // Move element into view when it is focused
      ref.current.focus();
    }
  }, [hasFocus]);

  const onKeyPress = (suggestion: string) => {
    console.log(activeSuggestionIndex);
    useCallback(() => {
      alert(`${suggestion}`);
      // setting focus to that element when it is selected
      setFocus(true);
    }, [suggestion, activeSuggestionIndex, setFocus]);
  };

  return filteredSuggestions.length ? (
    <SuggestionList>
      {filteredSuggestions.map((suggestion: string, index: number) => {
        // if (index === activeSuggestionIndex) {
        // }
        return (
          <Suggestion
            key={suggestion}
            onClick={(e: React.MouseEvent<HTMLLIElement>) =>
              chooseSuggestion(e)
            }
            role="button"
            tabIndex={hasFocus ? 0 : -1}
            ref={ref}
            // onKeyPress={() => onKeyPress(suggestion, activeSuggestionIndex)}
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
