import styled from "styled-components";
import { Link } from "react-router-dom";

import RightBubbles from "../../../assets/img/right-bubbles.png";
import {
  blue100,
  blue300,
  primaryBackground,
  primaryText,
} from "../../../assets/styles/colors";
import { minDevice } from "../../../assets/styles/breakpoints";
import Wrapper from "../../atoms/Wrapper";
import inputStyles from "../../atoms/InputStyles";

const LoginPageWrapper = styled(Wrapper)`
  background: ${primaryBackground};
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
`;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  width: 100%;
`;
const H4 = styled.h4`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${blue300};
`;

const LoginSubtitle = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  display: flex;
  text-align: center;
  padding: 0.8rem 1.6rem;
  color: ${primaryText};
`;

const LearnMoreLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${blue100};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin: 1.2rem 0;
`;

const RightBubblesImg = styled.div`
  background-image: url(${RightBubbles});
  background-size: contain;
  width: 7.517rem;
  height: 5.254rem;
  position: absolute;
  right: 0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
`;

const Input = styled.input`
  padding: 0 3rem 0 1rem;
  ${inputStyles}
`;

export {
  LoginPageWrapper,
  LearnMoreLink,
  H4,
  LoginSubtitle,
  RightBubblesImg,
  LoginFormWrapper,
  InputWrapper,
  LoginForm,
  Input,
};
