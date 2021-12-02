import styled, { css } from "styled-components";

import {
  activeButton,
  hoverButton,
  disabledButton,
  hoverSecondaryButton,
} from "../../../assets/styles/colors";
import { ReactComponent as Download } from "../../../assets/img/icons/download.svg";
import { minDevice } from "../../../assets/styles/breakpoints";
import { ButtonStyleProps } from "./interface";

const Button = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 3.2rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 5px;
  background-color: ${activeButton};
  font-family: "PT Sans", sans-serif;
  font-size: 1.4rem;
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

  @media ${minDevice.desktopL} {
    padding: 1.6rem 4.8rem;
    font-size: 1.6rem;
  }

  ${(props) =>
    !props.isPrimary &&
    css`
      background-color: transparent;
      color: ${activeButton};
      font-weight: bold;
      border: 1.5px solid ${activeButton};
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
    props.isHidden &&
    css`
      display: none;
      @media ${minDevice.desktopL} {
        display: flex;
      }
    `}
`;

const DownloadIcon = styled(Download)`
  width: 1.6rem;
  stroke: ${activeButton};
  margin-right: 0.8rem;
`;

const DownloadIconDisabled = styled(DownloadIcon)`
  stroke: ${disabledButton};
`;

export { Button, DownloadIcon, DownloadIconDisabled };
