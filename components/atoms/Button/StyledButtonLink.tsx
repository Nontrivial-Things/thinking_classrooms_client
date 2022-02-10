import Link from "next/link";
import styled from "styled-components";

import { ButtonStyleProps } from "./interface";
import { buttonStyles } from "./styles";

const StyledButtonLink = styled.a<ButtonStyleProps>`
  ${buttonStyles}
`;

export default StyledButtonLink;
