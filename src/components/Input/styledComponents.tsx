import styled from "styled-components";

import { minDevice } from "../../assets/styles/breakpoints";
import {
  white,
  placeholder,
  activeButton,
  lightGrey,
} from "../../assets/styles/colors";
import { ReactComponent as LensIcon } from "../../assets/img/icons/search.svg";
import { ReactComponent as SubstractIcon } from "../../assets/img/icons/Subtract.svg";

const Form = styled.form`
  width: 18em;
  @media ${minDevice.desktopTablet} {
    width: 22.5em;
  }
  @media ${minDevice.desktopL} {
    width: 31.4375em;
  }
`;

const Input = styled.input`
  width: 18em;
  height: 3em;
  border-radius: 5px;
  background: ${white};
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  font-size: 0.875em;
  line-height: 1.5em;
  padding: 0 2.5em;
  ::placeholder {
    color: ${placeholder};
  }
  &:focus-visible {
    outline: none;
  }
  @media ${minDevice.desktopTablet} {
    width: 22.5em;
  }
  @media ${minDevice.desktopL} {
    width: 31.4375em;
    font-size: 1em;
  }
`;

const Label = styled.label`
  position: relative;
`;

const SearchIcon = styled(LensIcon)`
  stroke: ${activeButton};
  left: 0.5em;
  top: calc(50% - 1.5 / 2 - 0.5px);
  bottom: 0;
  position: absolute;
`;

const ClearIcon = styled(SubstractIcon)`
  fill: ${lightGrey};
  right: 0.5em;
  top: calc(50% - 1em / 2 - 0.5px);
  bottom: 0;
  width: 1em;
  position: absolute;
`;

const SuggestionList = styled.ul`
  position: relative;
  width: 20em;
  box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.1);
  border-top: 1px solid;
  border-top-color: ${activeButton};
  @media ${minDevice.desktopTablet} {
    width: 24em;
  }
  @media ${minDevice.desktopL} {
    width: 36.45em;
    font-size: 1em;
  }
`;

const Suggestion = styled.li`
  font-size: 0.875em;
  padding: 0.5em;
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    filter: drop-shadow(0px 4px 15px red);
  }
`;

export {
  Form,
  Input,
  Label,
  SuggestionList,
  Suggestion,
  SearchIcon,
  ClearIcon,
};
