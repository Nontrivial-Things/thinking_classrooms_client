import React, { FC } from "react";
import styled from "styled-components";

import { minDevice } from "../../assets/styles/breakpoints";
import logoBlack from "../../assets/img/logo-black.svg";
import logoWhite from "../../assets/img/logo-white.svg";

interface LogoDivProps {
  width?: string;
}

const LogoDiv = styled.div<LogoDivProps>`
  width: ${(props) => props.width || "96px"};
  display: flex;

  @media ${minDevice.desktopTablet} {
    width: 158px;
  }

  @media ${minDevice.desktopL} {
    width: 185px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

interface LogoProps {
  isBackgroundDark: boolean;
  width?: string;
}

const Logo: FC<LogoProps> = ({ isBackgroundDark, width }) => {
  return (
    <LogoDiv width={width}>
      <Img src={isBackgroundDark ? logoWhite : logoBlack} />
    </LogoDiv>
  );
};

export default Logo;
