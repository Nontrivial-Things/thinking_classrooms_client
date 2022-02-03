import styled from "styled-components";

import { ReactComponent as Check } from "../../../../public/assets/img/icons/check.svg";
import {
  blue100,
  grey100,
  white,
} from "../../../../public/assets/styles/colors";
import { CheckBoxProps } from "./interface";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })<CheckBoxProps>`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const CheckIcon = styled(Check)<CheckBoxProps>`
  stroke: ${blue100};
  color: ${blue100};
  visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  top: 0.1rem;
  left: 0.1rem;
  position: absolute;
`;

const StyledCheckbox = styled.div<CheckBoxProps>`
  display: flex;
  width: 2rem;
  height: 2rem;
  background: ${white};
  border-radius: 5px;
  transition: all 150ms;
  position: relative;
  margin-right: 0.8em;
  border: ${(props) =>
    props.checked ? `1px solid ${blue100}` : `1px solid ${grey100}`};
  ${HiddenCheckbox}:focus-visible + & {
    outline: 2px solid -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export { HiddenCheckbox, CheckIcon, StyledCheckbox, CheckboxContainer };
