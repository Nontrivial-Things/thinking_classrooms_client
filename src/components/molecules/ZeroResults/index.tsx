import { FC } from "react";
import { ZeroResultsProps } from "./interface";

import * as S from "./styles";

const ZeroResults: FC<ZeroResultsProps> = ({ setTag }) => {
  const suggestions = ["Ciągi", "Jedzenie", "Zwierzęta"];

  const handleOnClick = (el: string) => {
    setTag(el);
  };
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
                <a onClick={() => setTag(suggestion)}>{suggestion}</a>,&nbsp;
              </li>
            );
          } else if (id === suggestions.length - 1) {
            return (
              <li key={id}>
                <a onClick={() => handleOnClick(suggestion)}>{suggestion}</a>
              </li>
            );
          }
        })}
      </S.ZeroResultsSuggestions>
    </S.ZeroResultsWrapper>
  );
};

export default ZeroResults;
