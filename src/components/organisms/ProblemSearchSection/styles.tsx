import styled from "styled-components";
import Wrapper from "../../atoms/Wrapper";

import { white } from "../../../assets/styles/colors";
import { minDevice } from "../../../assets/styles/breakpoints";

const SearchWrapper = styled(Wrapper)`
  padding: 2.4rem 1.6rem;
  @media ${minDevice.desktopTablet} {
    padding: 2.4rem 0 3.2rem 2.4rem;
  }
  @media ${minDevice.desktopL} {
    padding-left: 10rem;
  }
  @media ${minDevice.desktopXL} {
    padding-left: 20rem;
  }
`;

const H2 = styled.h2`
  color: ${white};
  padding-bottom: 1.6rem;
  font-size: 1.8rem;
  font-weight: 700;
  @media ${minDevice.desktopTablet} {
    font-size: 2.4rem;
  }
`;

export { SearchWrapper, H2 };
