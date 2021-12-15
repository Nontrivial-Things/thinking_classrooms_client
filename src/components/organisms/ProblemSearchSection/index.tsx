import { FC } from "react";

import SearchAutocomplete from "../../molecules/SearchAutocomplete";
import { ProblemSearchSectionProps } from "./interface";

import * as S from "./styles";
import { darkGradientBackground } from "../../../assets/styles/colors";

const ProblemSearchSection: FC<ProblemSearchSectionProps> = ({
  setTag,
  setProblems,
  setSearchTerm,
  searchTerm,
}) => {
  return (
    <S.SearchWrapper
      background={darkGradientBackground}
      flexDirection="column"
      margin="0"
      padding="2.4rem 1.6rem"
      paddingDT="2.4rem"
    >
      <S.H2>Szukaj problemów matematycznych</S.H2>
      <SearchAutocomplete
        setTag={setTag}
        setProblems={setProblems}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
    </S.SearchWrapper>
  );
};

export default ProblemSearchSection;
