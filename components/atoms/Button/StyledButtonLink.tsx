import styled from "styled-components";
import Link from "next/link";

import { ButtonStyleProps } from "./interface";
import { buttonStyles } from "./styles";

const StyledButtonLink = styled(Link)<ButtonStyleProps>`
  ${buttonStyles}
`;

export default StyledButtonLink;
