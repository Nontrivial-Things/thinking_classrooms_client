import { FC } from "react";
import { useTranslations } from "next-intl";

import SearchAutocomplete from "../../molecules/SearchAutocomplete";
import { ProblemSearchSectionProps } from "./interface";

import * as S from "./styles";
import { darkGradientBackground } from "../../../styles/colors";

const ProblemSearchSection: FC<ProblemSearchSectionProps> = ({
  setTag,
  setProblems,
  setSearchTerm,
  searchTerm,
  tag,
}) => {
  const t = useTranslations("problemsPage");

  return (
    <S.SearchWrapper
      background={darkGradientBackground}
      flexDirection="column"
      margin="0"
      padding="2.4rem 1.6rem"
      paddingDT="2.4rem"
    >
      <S.H2>{t("searchInputHeader")}</S.H2>
      <SearchAutocomplete
        tag={tag}
        setTag={setTag}
        setProblems={setProblems}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
    </S.SearchWrapper>
  );
};

export default ProblemSearchSection;
