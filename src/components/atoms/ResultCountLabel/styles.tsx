import styled from "styled-components";

import Wrapper from "../Wrapper";
import P from "../P";
import { minDevice } from "../../../assets/styles/breakpoints";
import { textDetails, primaryBackground } from "../../../assets/styles/colors";

const ResultCountWrapper = styled(Wrapper)`
  color: ${textDetails};
  text-align: left;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  margin: 2.4rem 0;
  padding: 0;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 0.5px solid ${textDetails};
    top: 50%;
    @media ${minDevice.desktopTablet} {
      padding: 0;
    }

    @media ${minDevice.desktopL} {
      padding: 0;
    }

    @media ${minDevice.desktopXL} {
      padding: 0;
    }
  }
`;

const ResultCountP = styled(P)`
  line-height: 2.4rem;
  font-size: 1.4rem;
  background-color: ${primaryBackground};
  height: 2.4rem;
  padding-right: 0.8rem;
  z-index: 3;
  position: relative;

  @media ${minDevice.desktopTablet} {
    line-height: 3.2rem;
    font-size: 1.6rem;
  }

  @media ${minDevice.desktopL} {
    line-height: 2.4rem;
    font-size: 1.8rem;
  }
`;
export { ResultCountWrapper, ResultCountP };
