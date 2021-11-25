import styled, { css } from "styled-components";

import {
  activeButton,
  hoverButton,
  disabledButton,
  hoverSecondaryButton,
} from "../../assets/styles/colors";
import { ReactComponent as Download } from "../../assets/img/icons/download.svg";

interface ButtonStyleProps {
  isPrimary: boolean;
}

const Button = styled.button<ButtonStyleProps>`
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

  ${(props) =>
    !props.isPrimary &&
    css`
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
        stroke: ${disabledButton};
      }
    `}
`;

const DownloadIcon = styled(Download)`
  width: 16px;
  stroke: ${activeButton};
  margin-right: 8px;
`;

const DownloadIconDisabled = styled(DownloadIcon)`
  stroke: ${disabledButton};
`;

export { Button, DownloadIcon, DownloadIconDisabled };
