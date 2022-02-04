import { FC } from "react";
import { ZeroResultsProps } from "./interface";
import { useTranslations } from "next-intl";

import * as S from "./styles";

const ZeroResults: FC<ZeroResultsProps> = ({ setTag, setSearchTerm }) => {
  const suggestedTags = ["ciągi", "jedzenie", "zwierzęta"];
  const t = useTranslations("problemsPage");

  const handleOnClick = (tag: string) => {
    setTag(tag);
    setSearchTerm(tag);
  };

  return (
    <S.ZeroResultsWrapper>
      <S.ZeroResultsImg aria-hidden="true" />
      <S.ZeroResultsHeader>{t("zeroResultsHeader")}</S.ZeroResultsHeader>
      <S.ZeroResultsSpan>{t("zeroResultsText")}</S.ZeroResultsSpan>
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
