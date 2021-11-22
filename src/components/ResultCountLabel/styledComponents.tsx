import styled from "styled-components";

import Wrapper from "../Wrapper";
import P from "../P";
import { minDevice } from "../../assets/styles/breakpoints";
import { textDetails } from "../../assets/styles/colors";

const ResultCountWrapper = styled(Wrapper)`
  color: ${textDetails};
  text-align: left;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;

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
    margin: 1em 0;
  }

  @media ${minDevice.desktopL} {
    margin: 2em 0 2.5em 0;
  }

  @media ${minDevice.desktopXL} {
    margin: 2em 0 2.5em 0;
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
