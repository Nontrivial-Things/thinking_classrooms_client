import styled from "styled-components";
import { minDevice } from "../../assets/styles/breakpoints";

interface WraperProps {
  flexDirection: string;
  flexDirectionDT: string;
  margin: string;
  padding: string;
  justifyContent: string;
  alignItems: string;
}

type PropsOptional = Partial<WraperProps>;

const Wrapper = styled.div<PropsOptional>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "inherit"};
  align-items: ${(props) => props.alignItems || "inherit"};
  padding: ${(props) => props.padding || "1em"};
  margin: ${(props) => props.margin || "1em"};
  @media ${minDevice.desktopTablet} {
    flex-direction: ${(props) => props.flexDirectionDT};
  }
`;

export default Wrapper;
