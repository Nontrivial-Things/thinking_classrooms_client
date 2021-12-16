import styled from "styled-components";

import Wrapper from "../Wrapper";
import P from "../P";
import { ResultCountPProps } from "./interface";
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

const ResultCountP = styled(P)<ResultCountPProps>`
  line-height: 2.4rem;
  background-color: ${(props) => props.backgroundColor};
  height: 2.4rem;
  padding-right: 0.8rem;
  z-index: 3;
  position: relative;
  font-size: 1.4rem;

  @media ${minDevice.desktopTablet} {
    background-color: ${primaryBackground};
  }
`;
export { ResultCountWrapper, ResultCountP };
