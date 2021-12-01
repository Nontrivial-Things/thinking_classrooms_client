import { FC } from "react";

import * as S from "./styles";
import { ResultCountWrapperProps } from "./interface";

const ResultCountLabel: FC<ResultCountWrapperProps> = ({ count }) => {
  return (
    <S.ResultCountWrapper>
      <S.ResultCountP>Wyniki wyszukiwania ({count})</S.ResultCountP>
    </S.ResultCountWrapper>
  );
};

export default ResultCountLabel;
