import { FC } from "react";
import { useTranslations } from "next-intl";

import * as S from "./styles";
import { ResultCountWrapperProps } from "./interface";
import { white, primaryBackground } from "../../../styles/colors";

const ResultCountLabel: FC<ResultCountWrapperProps> = ({ count }) => {
  const t = useTranslations("problemsPage");

  return (
    <S.ResultCountWrapper>
      <S.ResultCountSpan
        backgroundColor={count === 0 ? white : primaryBackground}
      >
        {`${t("searchResults")} (${count})`}
      </S.ResultCountSpan>
    </S.ResultCountWrapper>
  );
};

export default ResultCountLabel;
