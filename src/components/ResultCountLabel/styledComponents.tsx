import styled from "styled-components";

import Wrapper from "../Wrapper";
import P from "../P";
import { minDevice } from "../../assets/styles/breakpoints";
import { textDetails } from "../../assets/styles/colors";

const ResultCountWrapper = styled(Wrapper)`
  color: ${textDetails};
  text-align: left;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  margin-top: 1em;

  &::after {
    content: "";
    position: absolute;
    width: calc(100% - (2 * 1em));
    border-bottom: 0.5px solid ${textDetails};
    z-index: 2;
    top: 50%;
    @media ${minDevice.desktopTablet} {
      width: calc(100% - (2 * 1.5em));
    }

    @media ${minDevice.desktopL} {
      width: calc(100% - (2 * 6.25em));
    }

    @media ${minDevice.desktopXL} {
      width: calc(100% - (2 * 12.5em));
    }
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
