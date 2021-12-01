import { FC } from "react";

import logoBlack from "../../assets/img/logo-black.svg";
import logoWhite from "../../assets/img/logo-white.svg";
import { LogoProps } from "./interface";
import { LogoDiv, Img } from "./styles";

const Logo: FC<LogoProps> = ({ isBackgroundDark }) => {
  return (
    <LogoDiv>
      <Img src={isBackgroundDark ? logoWhite : logoBlack} />
    </LogoDiv>
  );
};

export default Logo;
