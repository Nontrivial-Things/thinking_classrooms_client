import styled from "styled-components";
// import { minDevice } from "../../assets/styles/breakpoints";
import { white, placeholder, activeButton } from "../../assets/styles/colors";
import SearchIcon from "../../assets/img/icons/search.svg";

const Input = styled.input`
  width: 18em;
  height: 3em;
  border-radius: 5px;
  color: ${white};
  background: ${white};
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  font-size: 0.875em;
  line-height: 1.5em;
  font-weight: 200;
  ::placeholder {
    color: ${placeholder};
    padding: 0 2em;
    width: 218px;
    height: 24px;
    line-height: 1.5em;
  }
`;

const Label = styled.label`
  position: relative;
  ::before {
    content: "";
    position: absolute;
    left: 0.5em;
    top: 0;
    bottom: 0;
    width: 1.3125em;
    background: url(${SearchIcon}) center / contain no-repeat;
  }
`;

export { Input, Label };
