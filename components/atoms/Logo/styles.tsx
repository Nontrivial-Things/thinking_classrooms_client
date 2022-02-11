import styled from "styled-components";

import { minDevice } from "../../../styles/breakpoints";

const LogoDiv = styled.div`
  width: 13.7rem;

  @media ${minDevice.desktopTablet} {
    width: 15.8rem;
  }

  @media ${minDevice.desktopL} {
    width: 18.5rem;
  }
`;

export { LogoDiv };
