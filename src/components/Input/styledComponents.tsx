import styled from "styled-components";
// import { minDevice } from "../../assets/styles/breakpoints";
import { white, placeholder } from "../../assets/styles/colors";

const Input = styled.input`
  width: 288px;
  height: 48px;
  border-radius: 5px;
  color: ${white};
  background: ${white};
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  ::placeholder {
    color: ${placeholder};
  }
`;

export default Input;
