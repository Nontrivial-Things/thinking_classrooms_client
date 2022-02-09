import styled from "styled-components";

import { ScrollButtonStyleProps } from "./interface";
import { minDevice } from "../../../styles/breakpoints";

const ScrollButton = styled.button<ScrollButtonStyleProps>`
  display: ${(props) => (props.$visible ? "inline" : "none")};
  position: fixed;
  left: 85%;
  top: 30%;
  width: fit-content;
  background: none;
  border: none;
  z-index: 1;
`;

const ArrowUpWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  scroll-behavior: smooth;

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
  @media ${minDevice.desktopL} {
    width: 5.6rem;
    height: 5.6rem;
  }
`;

export { ScrollButton, ArrowUpWrapper };
