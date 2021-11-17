import styled from "styled-components";

import { tagBackground, tagText } from "../../assets/styles/colors";

import Wrapper from "../Wrapper";

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

const Img = styled.img`
  color: ${tagText};
  margin-left: 0.625em;
  cursor: pointer;
`;

export { TagWrapper, Img };
