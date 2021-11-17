import React, { FC } from "react";
import styled from "styled-components";

import { ResultCountWrapper, ResultCountP } from "./styledComponents";
import { ResultCountWrapperProps } from "./interface";

const ResultCountLabel: FC<ResultCountWrapperProps> = ({ count }) => {
  return (
    <ResultCountWrapper
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      padding="0"
    >
      <ResultCountP>Wyniki wyszukiwania ({count})</ResultCountP>
    </ResultCountWrapper>
  );
};

export default ResultCountLabel;
