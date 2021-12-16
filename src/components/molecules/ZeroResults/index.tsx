import { FC } from "react";
import { ZeroResultsProps } from "./interface";

import * as S from "./styles";

const ZeroResults: FC<ZeroResultsProps> = ({ setTag, setSearchTerm }) => {
  const suggestions = ["Ciągi", "Jedzenie", "Zwierzęta"];

  const handleOnClick = (el: string) => {
    setTag(el);
    setSearchTerm(el);
  };

  return (
    <S.ZeroResultsWrapper>
      <S.ZeroResultsImg />
      <S.ZeroResultsHeader>Brak wyników</S.ZeroResultsHeader>
      <S.ZeroResultsP>Spróbuj wyszukać:</S.ZeroResultsP>
      <S.ZeroResultsSuggestions>
        {suggestions.map((suggestion, id) => (
          <li key={id}>
            <a onClick={() => handleOnClick(suggestion)}>
              {(id ? ", " : "") + suggestion}
            </a>
          </li>
        ))}
      </S.ZeroResultsSuggestions>
    </S.ZeroResultsWrapper>
  );
};

export default ZeroResults;
