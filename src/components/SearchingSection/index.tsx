import { FC } from "react";

import SearchInput from "../Input";
import Wrapper from "../Wrapper/styledComponents";
import P from "../P/styledComponents";
import { darkGradientBackground, white } from "../../assets/styles/colors";

const SearchingSection: FC = () => {
  return (
    <Wrapper
      background={darkGradientBackground}
      flexDirection="column"
      margin="0"
      padding="1.5em 1em"
      paddingDT="1.5em 1em"
    >
      <P
        color={white}
        paddingBottom="1em"
        fontSize="1.125em"
        fontSizeDL="1.5em"
        fontWeight="700"
      >
        Szukaj problemów matematycznych
      </P>
      <SearchInput
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

export default SearchingSection;
