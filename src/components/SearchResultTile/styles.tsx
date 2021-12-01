import styled from "styled-components";

import { minDevice } from "../../assets/styles/breakpoints";
import { textDetails, white, lightGrey } from "../../assets/styles/colors";
import Wrapper from "../Wrapper";

const SearchResultTileWrapper = styled(Wrapper)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${white};
  margin: 0.3125em 0;
  padding: 0.5em 1em;
  border: 0.5px solid ${lightGrey};
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  @media ${minDevice.desktopTablet} {
    padding: 1.5em;
  }
`;

const AuthorWrapper = styled(Wrapper)`
  align-items: center;
  padding: 0;
  gap: 0.5em;
  margin: 1em 0;
`;

const TagWrapper = styled(Wrapper)`
  padding: 0;
  flex-wrap: wrap;
  gap: 0.3125em;
  margin: 0;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Details = styled.span`
  line-height: 1.5;
  color: ${textDetails};
  font-size: 0.875em;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1em;
  @media ${minDevice.desktopTablet} {
    font-size: 1.125em;
  }
  @media ${minDevice.desktopL} {
    font-size: 1.25em;
  }
`;

const Stage = styled.h5`
  display: none;
  color: ${textDetails};
  text-transform: uppercase;
  font-size: 0.875em;
  align-self: center;
  @media ${minDevice.desktopTablet} {
    display: inline-flex;
  }
`;

export {
  SearchResultTileWrapper,
  AuthorWrapper,
  TagWrapper,
  DetailsWrapper,
  Details,
  Title,
  Stage,
};
