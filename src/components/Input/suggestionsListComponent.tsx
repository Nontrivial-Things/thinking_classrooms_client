import { FC } from "react";
import { SuggestionsProps } from "./interface";
import { SuggestionList, Suggestion } from "./styledComponents";
import { ReactComponent as Clipboard } from "../../assets/img/icons/clipboard.svg";

const SuggestionsListComponent: FC<SuggestionsProps> = ({
  filteredSuggestions,
  activeSuggestionIndex,
  chooseSuggestion,
}) => {
  return filteredSuggestions.length ? (
    <SuggestionList>
      {filteredSuggestions.map((suggestion: string, index: number) => {
        // if (index === activeSuggestionIndex) {
        // }
        return (
          <Suggestion key={suggestion} onClick={(e) => chooseSuggestion(e)}>
            <Clipboard style={{ paddingRight: "0.5em" }} />
            <span>{suggestion}</span>
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
