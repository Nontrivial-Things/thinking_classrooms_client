import styled from "styled-components";
import { minDevice } from "../../assets/styles/breakpoints";

import { PropsOptional } from "./interface";

const Wrapper = styled.div<PropsOptional>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "inherit"};
  align-items: ${(props) => props.alignItems || "inherit"};
  padding: ${(props) => props.padding || "1em"};
  margin: ${(props) => props.margin || "1em"};
  background: ${(props) => props.background};
  @media ${minDevice.desktopTablet} {
    flex-direction: ${(props) => props.flexDirectionDT};
    padding: 0 1.5em;
  }
  @media ${minDevice.desktopL} {
    padding: 0 6.25em;
  }
  @media ${minDevice.desktopXL} {
    padding: 0 12.5em;
  }
`;

export default Wrapper;
