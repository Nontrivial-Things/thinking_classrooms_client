import { FC } from "react";

import { ProblemSubtitleProps } from "./interface";
import * as S from "./styles";

const ProblemSubtitle: FC<ProblemSubtitleProps> = ({ subtitle, color }) => {
  return (
    <S.SubtitleWrapper>
      <S.SubtitleHeader color={color}>{subtitle}</S.SubtitleHeader>
    </S.SubtitleWrapper>
  );
};

export default ProblemSubtitle;
