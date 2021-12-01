import styled from "styled-components";

import { white } from "../../assets/styles/colors";
import { minDevice } from "../../assets/styles/breakpoints";

const H2 = styled.h2`
  color: ${white};
  padding-bottom: 1em;
  font-size: 1.125em;
  font-weight: 700;
  @media ${minDevice.desktopTablet} {
    font-size: 1.5em;
  }
`;

export default H2;
