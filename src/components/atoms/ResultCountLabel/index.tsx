import { FC } from "react";

import * as S from "./styles";
import { ResultCountWrapperProps } from "./interface";
import { white, primaryBackground } from "../../../assets/styles/colors";

const ResultCountLabel: FC<ResultCountWrapperProps> = ({ count }) => {
  return (
    <S.ResultCountWrapper>
      <S.ResultCountP backgroundColor={count === 0 ? white : primaryBackground}>
        Wyniki wyszukiwania ({count})
      </S.ResultCountP>
    </S.ResultCountWrapper>
  );
};

export default ResultCountLabel;
