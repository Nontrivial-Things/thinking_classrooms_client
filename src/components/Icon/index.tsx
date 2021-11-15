import styled from "styled-components";

import { primaryText } from "../../assets/styles/colors";
import { minDevice } from "../../assets/styles/breakpoints";
import IconProps from "./interace";

type PropsOptional = Partial<IconProps>;

const Icon = styled.div<PropsOptional>`
  color: ${(props) => props.color || primaryText};
  width: ${(props) => props.width || "auto"};
  position: relative;
  display: flex;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  &:hover {
    color: ${(props) => props.hoverColor};
  }
  @media ${minDevice.desktopTablet} {
    padding-right: ${(props) => props.paddingRight || "0.2em"};
  }
`;

export default Icon;
