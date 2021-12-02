import { FC } from "react";

import ResultCountLabel from "../../components/atoms/ResultCountLabel";
import Wrapper from "../../components/atoms/Wrapper";
import SearchResultTile from "../../components/molecules/SearchResultTile";
import { primaryBackground } from "../../assets/styles/colors";

const ProblemIndex: FC = () => {
  return (
    <Wrapper background={primaryBackground} flexDirection="column" margin="0">
      <ResultCountLabel count={3}></ResultCountLabel>
      <SearchResultTile
        text="Określenie ciągu. Sposoby opisywania ciągów."
        tags={["ciągi", "tag"]}
        date={new Intl.DateTimeFormat("pl-PL", {
          dateStyle: "medium",
        }).format(new Date())}
        author="Maria Salomea Skłodowska-Curie"
        educationStage="Dowolony etap edukacji"
      />
      <SearchResultTile
        text="Kompozycja mazurków."
        tags={["chopin", "muzyka klasyczna"]}
        date={new Intl.DateTimeFormat("pl-PL", {
          dateStyle: "medium",
        }).format(new Date())}
        author="Fryderyk Chopin"
        educationStage="Pierwszy etap edukacji"
      />
    </Wrapper>
  );
};

export default ProblemIndex;
