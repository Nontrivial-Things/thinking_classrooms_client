import styled, { css } from "styled-components";

import { SuggestionProps } from "./interface";

import { minDevice } from "../../assets/styles/breakpoints";
import {
  white,
  placeholder,
  activeButton,
  lightGrey,
} from "../../assets/styles/colors";
import { ReactComponent as LensIcon } from "../../assets/img/icons/search.svg";
import { ReactComponent as ClearIcon } from "../../assets/img/icons/remove-icon.svg";

const FormWrapper = styled.div`
  width: 100%;
  height: 5em;
  box-shadow: 0px 4px 15px 0px rgba(22, 28, 86, 0.2);
  z-index: 10;
  @media ${minDevice.desktopTablet} {
    width: 22.5em;
  }
  @media ${minDevice.desktopL} {
    width: 31.4375em;
  }
`;

const Form = styled.form`
  width: 100%;
  background: ${white};
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 3em;
  box-sizing: border-box;
  padding: 0 2.5em;
  border-radius: 5px;
  background: ${white};
  border: none;
  font-family: inherit;
  font-size: 0.875em;
  line-height: 1.5em;
  ::placeholder {
    color: ${placeholder};
  }
  &:focus-visible {
    outline: none;
  }
`;

const Label = styled.label`
  position: relative;
`;

const SearchIcon = styled(LensIcon)`
  stroke: ${activeButton};
  left: 0.5em;
  bottom: 0;
  position: absolute;
`;

const RemoveIcon = styled(ClearIcon)`
  fill: ${lightGrey};
  width: 1em;
`;

const SuggestionList = styled.ul`
  position: relative;
  width: 100%;
  max-height: 22.5em;
  border-top: 1px solid;
  border-top-color: ${activeButton};
  overflow: scroll;
  @media ${minDevice.desktopL} {
    max-height: 30.5625em;
  }
`;

const Suggestion = styled.li<SuggestionProps>`
  font-size: 0.875em;
  box-sizing: border-box;
  padding: 0.5em;
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background: rgba(22, 28, 86, 0.1);
  }
  ${(props) =>
    props.isSelected &&
    css`
      background: rgba(22, 28, 86, 0.1);
    `}
`;

const Button = styled.button`
  width: 1em;
  height: 1em;
  border: none;
  right: 1.25em;
  top: 0.7em;
  bottom: 0;
  position: absolute;
  background: transparent;
`;

const Combobox = styled.div`
  width: 100%;
  height: 5em;
  box-shadow: 0px 4px 15px 0px rgba(22, 28, 86, 0.2);
  z-index: 10;
  @media ${minDevice.desktopTablet} {
    width: 22.5em;
  }
  @media ${minDevice.desktopL} {
    width: 31.4375em;
  }
`;
export {
  Form,
  Input,
  Label,
  SuggestionList,
  Suggestion,
  SearchIcon,
  RemoveIcon,
  FormWrapper,
  Button,
  Combobox,
};