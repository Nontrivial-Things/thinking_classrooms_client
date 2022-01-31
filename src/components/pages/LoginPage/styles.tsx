import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { InputStyleProps } from "./interface";
import Wrapper from "../../atoms/Wrapper";
import inputStyles from "../../atoms/InputStyles";
import LeftBottomBubbles from "../../../assets/img/left-bottom-bubbles.png";
import LeftTopBubbles from "../../../assets/img/left-top-bubbles.png";
import RightBubbles from "../../../assets/img/right-bubbles.png";
import { ReactComponent as Alert } from "../../../assets/img/icons/alert-triangle.svg";
import { ReactComponent as EyeOff } from "../../../assets/img/icons/eye-off.svg";
import { ReactComponent as Eye } from "../../../assets/img/icons/eye.svg";

import {
  white,
  blue100,
  blue300,
  primaryBackground,
  primaryText,
  grey100,
  grey200,
  error,
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
  padding-bottom: 3.2rem;
  width: 100%;
  @media ${minDevice.desktopTablet} {
    background: ${white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    width: 49rem;
    padding: 4.8rem 9.1rem;
    align-self: center;
    margin-top: 4.8rem;
  }

  @media ${minDevice.desktopL} {
    width: 63.8rem;
    margin-top: 6.4rem;
    padding: 5.6rem 12rem;
  }
`;
const H4 = styled.h4`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${blue300};
  @media ${minDevice.desktopTablet} {
    font-size: 2.4rem;
    line-height: 4.8rem;
  }
  @media ${minDevice.desktopL} {
    font-size: 3.6rem;
    line-height: 5.2rem;
  }
`;

const InfoText = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  display: flex;
  text-align: center;
  margin-bottom: 1.2rem;
  color: ${primaryText};
  @media ${minDevice.desktopL} {
    font-size: 1.6rem;
    line-height: 3.2rem;
  }
`;

const LoginErrorMessage = styled(InfoText)`
  color: red;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${blue100};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 1.2rem;
  @media ${minDevice.desktopL} {
    font-size: 1.6rem;
    line-height: 3.2rem;
  }
`;

const RightBubblesImg = styled.div`
  background-image: url(${RightBubbles});
  background-size: contain;
  background-repeat: no-repeat;
  width: 7.517rem;
  height: 5.254rem;
  position: absolute;
  right: 0;
  @media ${minDevice.desktopTablet} {
    width: 16.343rem;
    height: 11.231rem;
  }

  @media ${minDevice.desktopL} {
    width: 25.36rem;
    height: 22.08rem;
  }

  @media ${minDevice.desktopXL} {
    width: 31.7rem;
    height: 27.6rem;
  }
`;

const LeftTopBubblesImg = styled.div`
  display: none;
  @media ${minDevice.desktopTablet} {
    display: flex;
    background-image: url(${LeftTopBubbles});
    background-size: contain;
    background-repeat: no-repeat;
    width: 10rem;
    height: 9rem;
    position: absolute;
    left: 0;
  }
  @media ${minDevice.desktopL} {
    width: 9.947rem;
    height: 10.669rem;
  }
  @media ${minDevice.desktopXL} {
    width: 29rem;
    height: 18.4rem;
  }
`;

const LeftBottomBubblesImg = styled.div`
  display: none;
  @media ${minDevice.desktopTablet} {
    display: flex;
    background-image: url(${LeftBottomBubbles});
    background-size: contain;
    background-repeat: no-repeat;
    width: 8.5rem;
    height: 9.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  @media ${minDevice.desktopL} {
    width: 14.243rem;
    height: 13.724rem;
  }
  @media ${minDevice.desktopXL} {
    width: 20rem;
    height: 20.5rem;
  }
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
  position: relative;
`;

const Input = styled.input<InputStyleProps>`
  padding: 0 3rem 0 1rem;
  border-radius: 5px;
  border: ${(props) =>
    props.validationFailed ? `1px solid ${error}` : `1.5px solid ${grey100}`};
  ${inputStyles};
`;

const AlertIcon = styled(Alert)`
  margin-right: 0.5rem;
  width: 1.828rem;
  height: 1.584rem;
`;

const iconEyeStyles = css`
  stroke: ${grey200};
  right: 0.6rem;
  top: 0.6rem;
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

const ShowPasswordButton = styled.button`
  all: unset;
  cursor: pointer;
  right: 1rem;
  top: 3.3rem;
  bottom: 0;
  position: absolute;
  width: 3rem;
  height: 3rem;
  &:focus-visible {
    outline: 2px solid -webkit-focus-ring-color;
    border-radius: 5px;
  }
`;

const LoginOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

export {
  LoginPageWrapper,
  StyledLink,
  H4,
  InfoText,
  LoginErrorMessage,
  RightBubblesImg,
  LeftTopBubblesImg,
  LeftBottomBubblesImg,
  LoginFormWrapper,
  InputWrapper,
  LoginForm,
  Input,
  AlertIcon,
  EyeOffIcon,
  EyeIcon,
  Label,
  ShowPasswordButton,
  LoginOptions,
};
