import styled, { css } from "styled-components";

import {
  activeButton,
  hoverButton,
  disabledButton,
  hoverSecondaryButton,
} from "../../assets/styles/colors";
import { ButtonProps } from "./interface";

const ButtonPrimaryActive = styled.button`
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

  &:hover {
    background-color: ${hoverButton};
  }

  &:active {
    background-color: ${hoverButton};
    box-shadow: none;
  }

  &:disabled {
    background-color: ${disabledButton};
    box-shadow: none;
  }
`;

export { ButtonPrimaryActive };
