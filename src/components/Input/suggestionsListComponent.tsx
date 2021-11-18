import { FC } from "react";
import { SuggestionsProps } from "./interface";
import { SuggestionList, Suggestion } from "./styledComponents";
import { ReactComponent as Clipboard } from "../../assets/img/icons/clipboard.svg";

const SuggestionsListComponent: FC<SuggestionsProps> = (
  { filteredSuggestions },
  activeSuggestionIndex
) => {
  return filteredSuggestions.length ? (
    <SuggestionList>
      {filteredSuggestions.map((suggestion: string, index: number) => {
        // if (index === activeSuggestionIndex) {
        // }
        return (
          <Suggestion key={suggestion}>
            <Clipboard style={{ paddingRight: "0.2em" }} />
            {suggestion}
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
