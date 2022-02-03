import { FC } from "react";

import * as S from "./styles";
import { ProblemSubtitleProps } from "./interface";

const ProblemSubtitle: FC<ProblemSubtitleProps> = ({ subtitle, color }) => {
  return (
    <S.SubtitleWrapper>
      <S.SubtitleHeader color={color}>{subtitle}</S.SubtitleHeader>
    </S.SubtitleWrapper>
  );
};

export default ProblemSubtitle;
