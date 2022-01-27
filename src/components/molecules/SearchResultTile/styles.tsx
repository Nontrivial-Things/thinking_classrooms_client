import styled from "styled-components";
import { Link } from "react-router-dom";

import { minDevice } from "../../../assets/styles/breakpoints";
import { grey100, grey300, white } from "../../../assets/styles/colors";
import Wrapper from "../../atoms/Wrapper";

const SearchResultTileWrapper = styled(Wrapper)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${white};
  margin: 0.5rem 0;
  padding: 0.8rem 1.6rem;
  border: 0.5px solid ${grey100};
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  @media ${minDevice.desktopTablet} {
    padding: 2.4rem;
  }

  @media ${minDevice.desktopL} {
    box-shadow: none;

    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
`;

const AuthorWrapper = styled(Wrapper)`
  align-items: center;
  padding: 0;
  gap: 0.8rem;
  margin: 1.6rem 0;
`;

const TagWrapper = styled(Wrapper)`
  padding: 0;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Details = styled.span`
  line-height: 1.5;
  color: ${grey300};
  font-size: 1.4rem;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  &::first-letter {
    text-transform: capitalize;
  }
  @media ${minDevice.desktopTablet} {
    font-size: 1.8rem;
  }
  @media ${minDevice.desktopL} {
    font-size: 2rem;
  }
`;

const StyledTitleLink = styled(Link)`
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  @media ${minDevice.desktopL} {
    &::after {
      display: none;
    }
  }
`;

const Stage = styled.h5`
  display: none;
  color: ${grey300};
  text-transform: uppercase;
  font-size: 1.4rem;
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
  StyledTitleLink,
  Stage,
};
