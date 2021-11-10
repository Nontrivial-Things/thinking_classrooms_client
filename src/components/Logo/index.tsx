import React from "react";
import styled from "styled-components";
import { minDevice } from "../../assets/styles/breakpoints";

import logo from "../../assets/img/logo-group.svg";

const LogoDiv = styled.div`
  width: 100%;
  display: flex;
`;

const Img = () => {
  return (
    <LogoDiv>
      <img src={logo} />
    </LogoDiv>
  );
};

export default Img;
