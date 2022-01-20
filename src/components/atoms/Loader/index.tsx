import { FC } from "react";
import * as S from "./styles";

const Loader: FC = () => (
  <S.LoaderWrapper>
    <S.LoaderSpinner />
  </S.LoaderWrapper>
);

export default Loader;
