import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { InputStyleProps } from "../../atoms/InputStyles/interface";
import Wrapper from "../../atoms/Wrapper";
import inputStyles from "../../atoms/InputStyles";
import RightBubbles from "../../../assets/img/right-bubbles.png";
import { ReactComponent as Alert } from "../../../assets/img/icons/alert-triangle.svg";
import { ReactComponent as EyeOff } from "../../../assets/img/icons/eye-off.svg";
import { ReactComponent as Eye } from "../../../assets/img/icons/eye.svg";

import {
  blue100,
  blue300,
  primaryBackground,
  primaryText,
  grey100,
  grey200,
  errorMessage,
} from "../../../assets/styles/colors";
import { minDevice } from "../../../assets/styles/breakpoints";

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

const InfoText = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  display: flex;
  text-align: center;
  margin-bottom: 1.2rem;
  color: ${primaryText};
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${blue100};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 1.2rem;
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

const Input = styled.input<InputStyleProps>`
  padding: 0 3rem 0 1rem;
  border-radius: 5px;
  border: ${(props) =>
    props.validationFailed
      ? `1px solid ${errorMessage}`
      : `1.5px solid ${grey200}`};
  ${inputStyles};
`;

const AlertIcon = styled(Alert)`
  margin-right: 0.5rem;
  width: 1.828rem;
  height: 1.584rem;
`;

const iconEyeStyles = css`
  stroke: ${grey100};
  right: 0.8rem;
  top: 4rem;
  position: absolute;
`;

const EyeOffIcon = styled(EyeOff)`
  ${iconEyeStyles}
`;

const EyeIcon = styled(Eye)`
  ${iconEyeStyles}
`;

const Label = styled.label`
  position: relative;
  display: flex;
  align-content: center;
`;

const ShownPasswordButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const LoginOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

const Checkbox = styled.input`
  margin: 0 0.5rem 1.2rem 0;
  align-self: center;
`;

export {
  LoginPageWrapper,
  StyledLink,
  H4,
  InfoText,
  RightBubblesImg,
  LoginFormWrapper,
  InputWrapper,
  LoginForm,
  Input,
  AlertIcon,
  EyeOffIcon,
  EyeIcon,
  Label,
  ShownPasswordButton,
  LoginOptions,
  Checkbox,
};