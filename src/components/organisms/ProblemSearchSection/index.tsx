import { FC } from "react";
import { gql, useQuery } from "@apollo/client";

import SearchAutocomplete from "../../molecules/SearchAutocomplete";
import { ProblemSearchSectionProps, GetSuggestionsQuery } from "./interface";

import * as S from "./styles";
import { darkGradientBackground } from "../../../assets/styles/colors";

const ProblemSearchSection: FC<ProblemSearchSectionProps> = ({ problems }) => {
  return (
    <S.SearchWrapper
      background={darkGradientBackground}
      flexDirection="column"
      margin="0"
      padding="2.4rem 1.6rem"
      paddingDT="2.4rem"
    >
      <S.H2>Szukaj problemów matematycznych</S.H2>
      <SearchAutocomplete />
    </S.SearchWrapper>
  );
};

export default ProblemSearchSection;
