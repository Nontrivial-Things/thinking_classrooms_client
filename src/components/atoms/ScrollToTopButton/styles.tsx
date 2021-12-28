import styled from "styled-components";

import { ArrowUpIconStyleProps } from "./interface";
import { ReactComponent as ArrowUp } from "../../../assets/img/icons/arrow-up.svg";
import { minDevice } from "../../../assets/styles/breakpoints";

const ScrollButton = styled.button`
  position: fixed;
  left: 85%;
  top: 10%;
  width: fit-content;
  background: none;
  border: none;
  overflow-y: scroll;
`;

const ArrowUpIcon = styled(ArrowUp)<ArrowUpIconStyleProps>`
  display: ${(props) => (props.visible ? "inline" : "none")};
  width: 4rem;
  height: 4rem;
  @media ${minDevice.desktopL} {
    width: 5.6rem;
    height: 5.6rem;
  }
`;

export { ScrollButton, ArrowUpIcon };
