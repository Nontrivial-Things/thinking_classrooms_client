import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { SuggestionProps, InputStyleProps, SearchIconProps } from "./interface";

import inputStyles from "../../atoms/InputStyles";
import { minDevice } from "../../../assets/styles/breakpoints";
import {
  white,
  grey100,
  grey200,
  blue100,
} from "../../../assets/styles/colors";
import { ReactComponent as LensIcon } from "../../../assets/img/icons/search.svg";
import { ReactComponent as ClearIcon } from "../../../assets/img/icons/remove-icon.svg";
import { ReactComponent as Clipboard } from "../../../assets/img/icons/clipboard.svg";

const FormWrapper = styled.div`
  width: 100%;
  height: 8rem;
  box-shadow: 0px 4px 15px 0px rgba(22, 28, 86, 0.2);
  z-index: 10;
  @media ${minDevice.desktopTablet} {
    width: 36rem;
  }
  @media ${minDevice.desktopL} {
    width: 50.3rem;
  }
`;

const Form = styled.form`
  width: 100%;
  background: ${white};
  position: relative;
  border-radius: 5px;
`;

const Input = styled.input<InputStyleProps>`
  border-radius: ${(props) => (props.showSuggestions ? 0 : "5px")};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: none;
  ::placeholder {
    color: ${grey200};
  }
  &:focus-visible {
    outline: none;
  }
  padding: 0 3.5rem;
  ${inputStyles}
  @media ${minDevice.desktopL} {
    padding: 0 4rem;
  }
`;

const Label = styled.label`
  position: relative;
`;

const SearchIcon = styled(LensIcon)<SearchIconProps>`
  stroke: ${blue100};
  left: 0.8rem;
  bottom: 0;
  position: absolute;
  top: ${(props) => props.top};
`;

const RemoveIcon = styled(ClearIcon)`
  fill: ${grey100};
  width: 1.6rem;
`;

const SuggestionList = styled.ul`
  position: absolute;
  background-color: ${white};
  width: 100%;
  max-height: 36rem;
  border-top: 1px solid;
  border-top-color: ${blue100};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 2px 8px rgb(0 0 0 / 10%);
  overflow: scroll;
  @media ${minDevice.desktopL} {
    max-height: 48.9rem;
  }
`;

const Suggestion = styled.li<SuggestionProps>`
  font-size: 1.4rem;
  box-sizing: border-box;
  padding: 0.8rem;
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
  &>span {
    font-size: 1.4rem;
    line-height: 2.4rem;

    @media ${minDevice.desktopL} {
      font-size: 1.6rem;
      line-height: 3.2rem;
    }
  }
`;

const Button = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  border: none;
  right: 2rem;
  top: 1.12rem;
  bottom: 0;
  position: absolute;
  background: transparent;
`;

const Combobox = styled.div`
  width: 100%;
  box-shadow: 0px 4px 15px 0px rgba(22, 28, 86, 0.2);
  z-index: 10;
  @media ${minDevice.desktopTablet} {
    width: 36rem;
  }
  @media ${minDevice.desktopL} {
    width: 50.3rem;
  }
`;

const TagSearchIcon = styled(LensIcon)`
  padding-right: 0.8rem;
  stroke: black;
  font-size: 1.4rem;
  width: 1.6rem;
  display: none;
  @media ${minDevice.desktopTablet} {
    display: flex;
  }
`;

const ClipboardIcon = styled(Clipboard)`
  padding-right: 0.8rem;
  display: none;
  @media ${minDevice.desktopTablet} {
    display: flex;
  }
`;

const InputWithTags = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 3.5rem;
  border: none;
  ${inputStyles}
  @media ${minDevice.desktopL} {
    padding: 0 4rem;
  }
`;

const ProblemLink = styled(Link)`
  display: flex;
  width: 100%;
`;

const ProblemLinkSpan = styled.span`
  &::first-letter {
    text-transform: capitalize;
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
  TagSearchIcon,
  ClipboardIcon,
  InputWithTags,
  ProblemLink,
  ProblemLinkSpan,
};
