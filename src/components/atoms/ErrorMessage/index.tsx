import styled from "styled-components";
import { error } from "../../../assets/styles/colors";

const ErrorMessage = styled.span`
  display: flex;
  font-size: 1.4rem;
  color: ${error};
  margin-top: 0.9rem;
  align-items: center;
`;

export default ErrorMessage;
