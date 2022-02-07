import { css } from "styled-components";

import { minDevice } from "../../../styles/breakpoints";
import { white } from "../../../styles//colors";

const inputStyles = css`
  width: 100%;
  height: 4.8rem;
  box-sizing: border-box;
  background: ${white};
  font-family: inherit;
  font-size: 1.4rem;
  line-height: 2.4rem;

  &:focus-visible {
    outline: none;
  }

  @media ${minDevice.desktopL} {
    font-size: 1.6rem;
    line-height: 3.2rem;
  }
`;

export default inputStyles;