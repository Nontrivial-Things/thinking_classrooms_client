import styled from "styled-components";

import Wrapper from "../Wrapper";

import { tagBackground, tagText } from "../../assets/styles/colors";
import { ReactComponent as Subtract } from "../../assets/img/icons/Subtract.svg";

const TagWrapper = styled(Wrapper)`
  padding: 0 0.75em 0 0.755em;
  height: fit-content;
  width: fit-content;
  background-color: ${tagBackground};
  border-radius: 0.938em;
  line-height: 1.5em;
  font-size: 1em;
  color: ${tagText};
  font-weight: 700;
`;

const SubtractComponent = styled(Subtract)`
  fill: ${tagText};
  margin-left: 0.625em;
  cursor: pointer;
  width: 0.875em;
`;

export { TagWrapper, SubtractComponent };
