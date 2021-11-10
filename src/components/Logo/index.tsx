import React from "react";
import styled from "styled-components";
import { minDevice } from "../../assets/styles/breakpoints";

import logo from "../../assets/img/logo-group.svg";

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

const Logo = () => {
  return (
    <LogoDiv>
      <Img src={logo} />
    </LogoDiv>
  );
};

export default Logo;
