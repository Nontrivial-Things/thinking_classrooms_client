import React, { FC } from "react";
import styled from "styled-components";

import Logo from "../Logo";
import P from "../P";
import Icon from "../Icon";
import Mail from "../../assets/img/icons/mail.svg";
import { minDevice } from "../../assets/styles/breakpoints";
import { white, darkGradientBackground } from "../../assets/styles/colors";

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${darkGradientBackground};
`;

// interface FooterProps {}

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo isBackgroundDark />
      <P color={white}>Kontakt</P>
      <Icon color={white}>
        <img src={Mail} />
      </Icon>
      <P color={white}>myslaceklasy@email.com</P>
      <P color={white}>© Copyrights 2020.</P>
    </FooterWrapper>
  );
};

export default Footer;
