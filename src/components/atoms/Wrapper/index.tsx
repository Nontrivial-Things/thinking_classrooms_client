import styled from "styled-components";
import { minDevice } from "../../../assets/styles/breakpoints";

import { WrapperProps } from "./interface";

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "inherit"};
  align-items: ${(props) => props.alignItems || "inherit"};
  padding: ${(props) => props.padding || "0 1.6rem"};
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
  width: auto;
  min-height: ${(props) => props.minHeight};

  @media ${minDevice.desktopTablet} {
    flex-direction: ${(props) => props.flexDirectionDT};
    padding: ${(props) => props.paddingDT || "0 2.4rem"};
    background: ${(props) => props.backgroundDT};
  }
  @media ${minDevice.desktopL} {
    padding: 0 10rem;
  }
  @media ${minDevice.desktopXL} {
    padding: 0 20rem;
  }
`;

export default Wrapper;
