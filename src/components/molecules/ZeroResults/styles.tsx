import styled from "styled-components";

import Column from "../../atoms/Column";
import P from "../../atoms/P";

import { minDevice } from "../../../assets/styles/breakpoints";
import { blue100, blue200 } from "../../../assets/styles/colors";
import ZeroResults from "../../../assets/img/zero-results.png";

const ZeroResultsWrapper = styled(Column)`
  justify-content: center;
  align-items: center;
  padding-top: 1.6rem;

  @media ${minDevice.desktopTablet} {
    padding-top: 3rem;
  }

  @media ${minDevice.desktopL} {
    padding-top: 2.4rem;
  }
`;

const ZeroResultsImg = styled.div`
  background-image: url(${ZeroResults});
  width: 20.4rem;
  height: 16rem;
  background-size: contain;
  margin-bottom: 0.8rem;

  @media ${minDevice.desktopTablet} {
    width: 36.1rem;
    height: 28.2rem;
    margin-bottom: 3.2rem;
  }

  @media ${minDevice.desktopL} {
    margin-bottom: 3rem;
  }
`;

const ZeroResultsHeader = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 700;
  color: ${blue200};
  margin-bottom: 3.2rem;

  @media ${minDevice.desktopTablet} {
    font-size: 1.8rem;
  }

  @media ${minDevice.desktopL} {
    font-size: 2rem;
    line-height: 3.2rem;
    margin-bottom: 2.4rem;
  }
`;

const ZeroResultsP = styled(P)`
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 0.85rem;

  @media ${minDevice.desktopL} {
    font-size: 1.6;
    line-height: 3.2rem;
    margin-bottom: 0;
  }
`;

const ZeroResultsSuggestions = styled.ul`
  font-size: 1.4rem;
  line-height: 2.4rem;
  display: flex;

  @media ${minDevice.desktopL} {
    font-size: 1.6;
    line-height: 3.2rem;
  }

  & > li > a {
    color: ${blue100};
    cursor: pointer;
  }
`;

export {
  ZeroResultsWrapper,
  ZeroResultsImg,
  ZeroResultsHeader,
  ZeroResultsP,
  ZeroResultsSuggestions,
};
