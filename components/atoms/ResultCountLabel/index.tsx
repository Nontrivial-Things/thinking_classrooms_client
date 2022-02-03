import { FC } from "react";
import { useTranslation } from "react-i18next";

import * as S from "./styles";
import { ResultCountWrapperProps } from "./interface";
import { white, primaryBackground } from "../../../styles/colors";

const ResultCountLabel: FC<ResultCountWrapperProps> = ({ count }) => {
  const { t } = useTranslation("", { keyPrefix: "problemsPage" });

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
