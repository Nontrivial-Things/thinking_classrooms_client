import styled, { css } from "styled-components";

import {
  white,
  blue100,
  blue200,
  disabledButton,
  hoverSecondaryButton,
} from "../../../assets/styles/colors";
import { ReactComponent as Download } from "../../../assets/img/icons/download.svg";
import { minDevice } from "../../../assets/styles/breakpoints";
import { ButtonStyleProps } from "./interface";

const buttonStyles = css<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${(props) => props.$alignSelf};
  margin: ${(props) => props.$margin};
  padding: 0.8rem 3.2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 5px;
  background-color: ${blue100};
  font-family: "PT Sans", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${white};
  letter-spacing: 0.04rem;

  &:hover,
  &:active {
    background-color: ${blue200};
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    background-color: ${disabledButton};
    box-shadow: none;
  }

  @media ${minDevice.desktopL} {
    padding: 1.6rem 4.8rem;
    font-size: 1.6rem;
  }

  ${(props) =>
    !props.$isPrimary &&
    css`
      background-color: transparent;
      color: ${blue100};
      font-weight: bold;
      border: 1.5px solid ${blue100};
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
      @media ${minDevice.desktopL} {
        padding: 1.6rem 3.2rem;
        font-size: 1.6rem;
      }
    `}

  ${(props) =>
    props.$isHidden &&
    css`
      display: none;
      @media ${minDevice.desktopL} {
        display: flex;
      }
    `}
`;

const Button = styled.button<ButtonStyleProps>`
  ${buttonStyles};
`;

const DownloadIcon = styled(Download)`
  width: 1.6rem;
  stroke: ${blue100};
  margin-right: 0.8rem;
`;

const DownloadIconDisabled = styled(DownloadIcon)`
  stroke: ${disabledButton};
`;

export { buttonStyles, Button, DownloadIcon, DownloadIconDisabled };
