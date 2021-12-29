import { FC } from "react";

import logoBlack from "../../../assets/img/logo-black.svg";
import logoWhite from "../../../assets/img/logo-white.svg";
import { LogoProps } from "./interface";
import * as S from "./styles";

const Logo: FC<LogoProps> = ({ isBackgroundDark }) => {
  return (
    <S.LogoDiv>
      <S.Img
        src={isBackgroundDark ? logoWhite : logoBlack}
        alt="Logo aplikacji"
      />
    </S.LogoDiv>
  );
};

export default Logo;
