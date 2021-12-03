import { FC } from "react";

import SearchAutocomplete from "../../molecules/SearchAutocomplete";
import * as S from "./styles";
import { darkGradientBackground } from "../../../assets/styles/colors";

const ProblemSearchSection: FC = () => {
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
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
        ]}
      />
    </S.SearchWrapper>
  );
};

export default ProblemSearchSection;
