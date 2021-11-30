import styled from "styled-components";

import { minDevice } from "../../assets/styles/breakpoints";
import { textDetails, white } from "../../assets/styles/colors";
import P from "../P/styledComponents";
import Wrapper from "../Wrapper/styledComponents";

const SearchResultTileWrapper = styled(Wrapper)`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  background-color: ${white};
  margin: 1em 0;

  @media ${minDevice.desktopL} {
  }
`;

const AuthorWrapper = styled(Wrapper)`
  align-items: center;
  padding: 0;
  margin: 0;
  gap: 0.5em;
  margin: 1em 0;
`;

const TagWrapper = styled(Wrapper)`
  /* align-items: flex-start; */
  padding: 1em 0;
  flex-wrap: wrap;
  gap: 0.3125em;
`;

const DetailsP = styled(P)`
  line-height: 1.5;
  color: ${textDetails};
  font-size: 0.875em;
`;

const TitleP = styled(P)`
  font-weight: 700;
  @media ${minDevice.desktopTablet} {
    font-size: 1.125em;
  }
  @media ${minDevice.desktopL} {
    font-size: 1.25em;
  }
`;

const StageP = styled(P)`
  text-transform: uppercase;
  display: none;
  color: ${textDetails};
  font-size: 0.875em;
  @media ${minDevice.desktopTablet} {
    display: inline-flex;
  }
`;

export {
  SearchResultTileWrapper,
  AuthorWrapper,
  TagWrapper,
  DetailsP,
  TitleP,
  StageP,
};
