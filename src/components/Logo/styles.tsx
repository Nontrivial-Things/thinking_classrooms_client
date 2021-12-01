import styled from "styled-components";
import { LogoDivProps } from "./interface";
import { minDevice } from "../../assets/styles/breakpoints";

const LogoDiv = styled.div<LogoDivProps>`
  width: ${(props) => props.width || "137px"};
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

export { LogoDiv, Img };
