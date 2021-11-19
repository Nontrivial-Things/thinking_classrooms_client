import styled from "styled-components";

import Wrapper from "../Wrapper";

import { tagBackground, tagText } from "../../assets/styles/colors";
import { ReactComponent as RemoveIcon } from "../../assets/img/icons/remove-icon.svg";

const TagWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75em 0 0.755em;
  width: fit-content;
  background-color: ${tagBackground};
  border-radius: 0.938em;
  line-height: 1.5em;
  font-size: 1em;
  color: ${tagText};
  font-weight: 700;
`;

const RemoveTagIcon = styled(RemoveIcon)`
  fill: ${tagText};
  margin-left: 0.625em;
  cursor: pointer;
  width: 0.875em;
`;

export { TagWrapper, RemoveTagIcon };
