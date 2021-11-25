import { FC } from "react";

import ResultCountLabel from "../ResultCountLabel";
import Tag from "../Tag";
import Button from "../Button";

const ProblemIndex: FC = () => {
  return (
    <>
      <ResultCountLabel count={3}></ResultCountLabel>
      <Tag text="ciągi" isDroppable={true} />
      <Tag text="ciągi" />
      <Button disabled>Zaloguj się</Button>
      <Button isPrimary={false}>Zobacz treść</Button>
      <Button withDownloadIcon disabled isPrimary={false}>
        Pobierz treść
      </Button>
    </>
  );
};

export default ProblemIndex;
