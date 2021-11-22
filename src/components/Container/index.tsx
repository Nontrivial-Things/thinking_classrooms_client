import styled from "styled-components";

import { minDevice } from "../../assets/styles/breakpoints";

const Container = styled.div`
  padding: 0 1em;

  @media ${minDevice.desktopTablet} {
    padding: 0 1.5em;
  }

  @media ${minDevice.desktopL} {
    padding: 0 6.25em;
  }

  @media ${minDevice.desktopXL} {
    padding: 0 12.5em;
  }
`;

export default Container;
