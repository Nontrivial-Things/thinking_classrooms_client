import styled from "styled-components";

import { primaryText } from "../../assets/styles/colors";

interface IconProps {
  fontSize: string;
  color: string;
  width: string;
  hoverColor: string;
  paddingTop: string;
  paddingRight: string;
}

type PropsOptional = Partial<IconProps>;

const Icon = styled.div<PropsOptional>`
  color: ${(props) => props.color || primaryText};
  width: ${(props) => props.width || "auto"};
  padding-top: ${(props) => props.paddingTop || "0.2em"};
  padding-right: ${(props) => props.paddingRight || "0.5em"};
  position: relative;
  display: flex;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

export default Icon;
