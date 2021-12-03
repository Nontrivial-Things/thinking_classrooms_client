import { FC } from "react";

import SearchAutocomplete from "../../molecules/SearchAutocomplete";
import Wrapper from "../../atoms/Wrapper";
import H2 from "./styles";
import { darkGradientBackground } from "../../../assets/styles/colors";

const ProblemSearchSection: FC = () => {
  return (
    <Wrapper
      background={darkGradientBackground}
      flexDirection="column"
      margin="0"
      padding="2.4rem 1.6rem"
      paddingDT="2.4rem"
    >
      <H2>Szukaj problemów matematycznych</H2>
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
    </Wrapper>
  );
};

export default ProblemSearchSection;
