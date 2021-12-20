import { FC } from "react";
import { ZeroResultsProps } from "./interface";

import * as S from "./styles";

const ZeroResults: FC<ZeroResultsProps> = ({ setTag, setSearchTerm }) => {
  const suggestedTags = ["Ciągi", "Jedzenie", "Zwierzęta"];

  const handleOnClick = (tag: string) => {
    setTag(tag);
    setSearchTerm(tag);
  };

  return (
    <S.ZeroResultsWrapper>
      <S.ZeroResultsImg aria-hidden="true" />
      <S.ZeroResultsHeader>Brak wyników</S.ZeroResultsHeader>
      <S.ZeroResultsSpan>Spróbuj wyszukać:</S.ZeroResultsSpan>
      <S.ZeroResultsTagSuggestions>
        {suggestedTags.map((tag, id) => (
          <li key={id}>
            <a onClick={() => handleOnClick(tag)}>{(id ? ", " : "") + tag}</a>
          </li>
        ))}
      </S.ZeroResultsTagSuggestions>
    </S.ZeroResultsWrapper>
  );
};

export default ZeroResults;
