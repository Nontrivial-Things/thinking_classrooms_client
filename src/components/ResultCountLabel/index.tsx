import { FC } from "react";

import { ResultCountWrapper, ResultCountP } from "./styles";
import { ResultCountWrapperProps } from "./interface";

const ResultCountLabel: FC<ResultCountWrapperProps> = ({ count }) => {
  return (
    <ResultCountWrapper>
      <ResultCountP>Wyniki wyszukiwania ({count})</ResultCountP>
    </ResultCountWrapper>
  );
};

export default ResultCountLabel;
