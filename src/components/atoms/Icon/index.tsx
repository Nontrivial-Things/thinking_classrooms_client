import styled from "styled-components";

import { primaryText } from "../../../../public/assets/styles/colors";
import { minDevice } from "../../../../public/assets/styles/breakpoints";
import IconProps from "./interface";

type PropsOptional = Partial<IconProps>;

const Icon = styled.div<PropsOptional>`
  color: ${(props) => props.color || primaryText};
  width: ${(props) => props.width || "auto"};
  position: relative;
  display: flex;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  padding-right: ${(props) => props.paddingRight || "0.5rem"};
  &:hover {
    color: ${(props) => props.hoverColor};
  }
  @media ${minDevice.desktopTablet} {
    padding-right: 0.9rem;
  }
`;

export default Icon;
