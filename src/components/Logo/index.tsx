import React, { FC } from "react";
import styled from "styled-components";

import { minDevice } from "../../assets/styles/breakpoints";
import logoBlack from "../../assets/img/logo-black.svg";
import logoWhite from "../../assets/img/logo-white.svg";

const LogoDiv = styled.div`
  width: 96px;
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
}

const Logo: FC<LogoProps> = ({ isBackgroundDark }) => {
  return (
    <LogoDiv>
      <Img src={isBackgroundDark ? logoBlack : logoWhite} />
    </LogoDiv>
  );
};

export default Logo;
