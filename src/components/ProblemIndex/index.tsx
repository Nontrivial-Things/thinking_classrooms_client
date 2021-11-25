import { FC } from "react";

import ResultCountLabel from "../ResultCountLabel";
import Tag from "../Tag";
import { ButtonPrimary } from "../Button/styledComponents";
import ButtonSecondary from "../Button";

const ProblemIndex: FC = () => {
  return (
    <>
      <ResultCountLabel count={3}></ResultCountLabel>
      <Tag text="ciągi" isDroppable={true} />
      <Tag text="ciągi" />
      <ButtonPrimary>Zaloguj się</ButtonPrimary>
      <ButtonSecondary>Zobacz treść</ButtonSecondary>
      <ButtonSecondary withDownloadIcon disabled>
        Pobierz treść
      </ButtonSecondary>
    </>
  );
};

export default ProblemIndex;
