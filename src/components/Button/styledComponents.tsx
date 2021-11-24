import styled, { css } from "styled-components";

import {
  activeButton,
  hoverButton,
  disabledButton,
  hoverSecondaryButton,
} from "../../assets/styles/colors";
import { ButtonProps } from "./interface";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  font-size: 1rem;
  border-radius: 5px;
`;

export { Button };
