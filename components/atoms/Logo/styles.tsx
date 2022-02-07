import styled from "styled-components";
import { LogoDivProps } from "./interface";
import { minDevice } from "../../../styles/breakpoints";

const LogoDiv = styled.div<LogoDivProps>`
  width: ${(props) => props.width || "13.7rem"};

  @media ${minDevice.desktopTablet} {
    width: 15.8rem;
  }

  @media ${minDevice.desktopL} {
    width: 18.5rem;
  }
`;

export { LogoDiv };