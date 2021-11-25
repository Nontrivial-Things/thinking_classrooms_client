import styled, { css } from "styled-components";

import {
  activeButton,
  hoverButton,
  disabledButton,
  hoverSecondaryButton,
} from "../../assets/styles/colors";
import { ButtonProps } from "./interface";

const ButtonPrimary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 5px;
  background-color: ${activeButton};
  font-family: "PT Sans", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.04rem;

  &:hover,
  &:active {
    background-color: ${hoverButton};
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    background-color: ${disabledButton};
    box-shadow: none;
  }
`;
const ButtonSecondary = styled(ButtonPrimary)`
  background-color: transparent;
  color: ${activeButton};
  font-weight: bold;
  border: 1.5px solid ${activeButton};
  padding: 16px 32px;
  box-shadow: none;

  &:hover,
  &:active {
    background-color: ${hoverSecondaryButton};
  }

  &:disabled {
    color: ${disabledButton};
    background-color: transparent;
    border-color: ${disabledButton};
  }
`;

export { ButtonPrimary, ButtonSecondary };
