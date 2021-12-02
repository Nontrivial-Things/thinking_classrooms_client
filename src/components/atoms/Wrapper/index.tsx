import styled from "styled-components";
import { minDevice } from "../../../assets/styles/breakpoints";

import { PropsOptional } from "./interface";

const Wrapper = styled.div<PropsOptional>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "inherit"};
  align-items: ${(props) => props.alignItems || "inherit"};
  padding: ${(props) => props.padding || "1.6rem"};
  margin: ${(props) => props.margin || "1.6rem"};
  background: ${(props) => props.background};
  width: auto;

  @media ${minDevice.desktopTablet} {
    flex-direction: ${(props) => props.flexDirectionDT};
    padding: ${(props) => props.paddingDT || "0 2.4rem"};
  }
  @media ${minDevice.desktopL} {
    padding: 0 10rem;
  }
  @media ${minDevice.desktopXL} {
    padding: 2.4rem 20rem;
  }
`;

export default Wrapper;
