import styled from "styled-components";

import Wrapper from "../Wrapper";
import TagWrapperProps from "./interface";

import { tagBackground, tagText } from "../../../styles/colors";
import RemoveIcon from "../../../public/assets/img/icons/remove-icon.svg";

const TagWrapper = styled(Wrapper)<TagWrapperProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.2rem 0 1.2rem;
  width: auto;
  background-color: ${tagBackground};
  border-radius: 1.5rem;
  line-height: 2.4rem;
  font-size: ${(props) => props.fontSize || "1.6rem"};
  text-transform: lowercase;
  color: ${tagText};
  font-weight: 700;
  margin: 0;
`;

const RemoveButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;
  width: 1.4rem;
  height: 1.4rem;
`;

const RemoveTagIcon = styled(RemoveIcon)`
  fill: ${tagText};
  width: 1.4rem;
`;

export { TagWrapper, RemoveButton, RemoveTagIcon };
