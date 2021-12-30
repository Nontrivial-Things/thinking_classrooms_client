import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../../../assets/img/icons/arrow-left.svg";
import { blue100 } from "../../../assets/styles/colors";

const GoToBackWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
  color: ${blue100};
`;

const Arrow = styled(ArrowLeft)`
  width: 1.6rem;
`;

const GoToBackSpan = styled.span`
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-left: 1.1rem;
`;

export { GoToBackWrapper, Arrow, GoToBackSpan };
