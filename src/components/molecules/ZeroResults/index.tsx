import { FC } from "react";

import * as S from "./styles";

const ZeroResults = () => {
  const suggestions = ["Wyrazenia algebraiczne", "Liceum", "Algebra"];

  return (
    <S.ZeroResultsWrapper>
      <S.ZeroResultsImg />
      <S.ZeroResultsHeader>Brak wyników</S.ZeroResultsHeader>
      <S.ZeroResultsP>Spróbuj wyszukać:</S.ZeroResultsP>
      <S.ZeroResultsSuggestions>
        {suggestions.map((suggestion, id) => {
          if (id < suggestions.length - 1) {
            return (
              <li key={id}>
                <a>{suggestion}</a>,&nbsp;
              </li>
            );
          } else if (id === suggestions.length - 1) {
            return (
              <li key={id}>
                <a>{suggestion}</a>
              </li>
            );
          }
        })}
      </S.ZeroResultsSuggestions>
    </S.ZeroResultsWrapper>
  );
};

export default ZeroResults;
