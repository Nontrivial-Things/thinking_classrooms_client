import { FC } from "react";

import ResultCountLabel from "../ResultCountLabel";
import Tag from "../Tag";
import Button from "../Button";
import Wrapper from "../Wrapper/styledComponents";
import SearchResultTile from "../SearchResultTile";
import { primaryBackground } from "../../assets/styles/colors";

const ProblemIndex: FC = () => {
  return (
    <>
      <Wrapper background={primaryBackground} flexDirection="column">
        <ResultCountLabel count={3} />
        <SearchResultTile
          text="Określenie ciągu. Sposoby opisywania ciągów."
          tagText="ciągi"
          date={new Intl.DateTimeFormat("en-GB", {
            dateStyle: "medium",
          }).format(new Date())}
          author="Maria Salomea Skłodowska-Curie"
          educationStage="Dowolony etap edukacji"
        />
        <SearchResultTile
          text="Określenie ciągu. Sposoby opisywania ciągów."
          tagText="ciągi"
          date={new Intl.DateTimeFormat("en-GB", {
            dateStyle: "medium",
          }).format(new Date())}
          author="Maria Salomea Skłodowska-Curie"
          educationStage="Dowolony etap edukacji"
        />
      </Wrapper>
      <Tag text="ciągi" isDroppable={true} />
      <Tag text="ciągi" />
      <Button>Zaloguj się</Button>
      <Button disabled>Zaloguj się</Button>
      <Button isPrimary={false}>Zaloguj się</Button>
      <Button isPrimary={false} disabled>
        Zaloguj się
      </Button>
      <Button isPrimary={false} withDownloadIcon>
        Zaloguj się
      </Button>
      <Button isPrimary={false} disabled withDownloadIcon>
        Zaloguj się
      </Button>
    </>
  );
};

export default ProblemIndex;
