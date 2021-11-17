import styled from "styled-components";
// import { minDevice } from "../../assets/styles/breakpoints";
import { white, placeholder, activeButton } from "../../assets/styles/colors";
import { ReactComponent as Icon } from "../../assets/img/icons/search.svg";

const Input = styled.input`
  width: 20em;
  height: 3em;
  border-radius: 5px;
  background: ${white};
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  font-size: 0.875em;
  line-height: 1.5em;
  padding: 0 2.5em;
  ::placeholder {
    color: ${placeholder};
  }
`;

const SearchIcon = styled(Icon)`
  stroke: ${activeButton};
`;

const Label = styled.label`
  position: relative;
`;

export { Input, Label };
