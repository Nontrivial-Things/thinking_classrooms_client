import styled, { css } from "styled-components";
import { errorMessage } from "../../../assets/styles/colors";

const ErrorMessage = styled.span`
  display: flex;
  font-size: 1.4rem;
  color: ${errorMessage};
  margin-top: 0.9rem;
  align-items: center;
`;

export default ErrorMessage;
