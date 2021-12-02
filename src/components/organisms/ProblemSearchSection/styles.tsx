import styled from "styled-components";

import { white } from "../../../assets/styles/colors";
import { minDevice } from "../../../assets/styles/breakpoints";

const H2 = styled.h2`
  color: ${white};
  padding-bottom: 1.6rem;
  font-size: 1.8rem;
  font-weight: 700;
  @media ${minDevice.desktopTablet} {
    font-size: 2.4rem;
  }
`;

export default H2;
