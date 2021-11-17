import styled from "styled-components";

import Wrapper from "../Wrapper";
import P from "../P";
import { minDevice } from "../../assets/styles/breakpoints";
import { textDetails } from "../../assets/styles/colors";

const ResultCountWrapper = styled(Wrapper)`
  color: ${textDetails};
  text-align: left;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 0.5px solid ${textDetails};
    z-index: 1;
    top: 50%;
    left: 0;
  }

  @media ${minDevice.desktopTablet} {
    margin: 1em 1.5em;
  }

  @media ${minDevice.desktopL} {
    margin: 2em 6.25em 2.5em 6.26em;
  }

  @media ${minDevice.desktopXL} {
    margin: 2em 12.5em 2.5em 12.5em;
  }
`;

const ResultCountP = styled(P)`
  line-height: 1.5em;
  background-color: white;
  height: 1.5em;
  padding-right: 8px;
  z-index: 3;
  position: relative;
  font-size: 0.875em;
`;
export { ResultCountWrapper, ResultCountP };
