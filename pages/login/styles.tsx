import styled, { css } from "styled-components";
import Link from "next/link";

import { InputStyleProps } from "./interface";
import Wrapper from "../../components/atoms/Wrapper";
import inputStyles from "../../components/atoms/InputStyles";
import EyeOff from "../../public/assets/img/icons/eye-off.svg";
import Eye from "../../public/assets/img/icons/eye.svg";

import {
  white,
  blue100,
  blue300,
  primaryBackground,
  primaryText,
  grey100,
  grey200,
  error,
} from "../../styles/colors";
import { minDevice } from "../../styles/breakpoints";

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
    width: 35.6rem;
    padding: 4.8rem 9.1rem;
    align-self: center;
    margin-top: 4.8rem;
  }

  @media ${minDevice.desktopL} {
    width: 44.2rem;
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
  color: ${error};
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
  width: 7.52rem;
  height: 5.25rem;
  position: absolute;
  right: 0;
  @media ${minDevice.desktopTablet} {
    width: 16rem;
    height: 11.23rem;
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
    display: block;
    width: 6.2rem;
    height: 66.6rem;
    position: absolute;
    left: 0;
  }
  @media ${minDevice.desktopL} {
    width: 9.947rem;
    height: 10.67rem;
  }
  @media ${minDevice.desktopXL} {
    width: 12.3rem;
    height: 13.3rem;
  }
`;

const LeftBottomBubblesImg = styled.div`
  display: none;
  @media ${minDevice.desktopTablet} {
    display: block;
    width: 11.5rem;
    height: 10rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  @media ${minDevice.desktopL} {
    width: 17.2rem;
    height: 15rem;
  }
  @media ${minDevice.desktopXL} {
    width: 21.5rem;
    height: 18.7rem;
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

const AlertWrapper = styled.div`
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
  AlertWrapper,
  EyeOffIcon,
  EyeIcon,
  Label,
  ShowPasswordButton,
  LoginOptions,
};
