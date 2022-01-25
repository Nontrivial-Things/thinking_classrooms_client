import styled from "styled-components";

import { ReactComponent as Check } from "../../../assets/img/icons/check.svg";
import { blue100, grey100, white } from "../../../assets/styles/colors";
import { CheckBoxProps } from "./interface";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })<CheckBoxProps>`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const CheckIcon = styled(Check)<CheckBoxProps>`
  stroke: ${grey100};
  visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  top: 0;
  left: 0;
  position: absolute;
`;

const StyledCheckbox = styled.div<CheckBoxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${white};
  border-radius: 3px;
  transition: all 150ms;
  position: relative;
  margin-right: 0.8em;
  border: ${(props) =>
    props.checked ? `1px solid ${blue100}` : `1px solid ${grey100}`};
  ${HiddenCheckbox}:focus + & {
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(246, 166, 35, 0.6);
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export { HiddenCheckbox, CheckIcon, StyledCheckbox, CheckboxContainer };
