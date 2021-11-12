import React, { FC } from "react";
import styled from "styled-components";

import Logo from "../Logo";
import P from "../P";
import Icon from "../Icon";
import Mail from "../../assets/img/icons/mail.svg";
import { minDevice } from "../../assets/styles/breakpoints";
import {
  white,
  darkGradientBackground,
  copyrights,
} from "../../assets/styles/colors";

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: ${darkGradientBackground};
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

// interface FooterProps {}

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo isBackgroundDark width="137px" />
      <ContactWrapper>
        <P color={white}>Kontakt</P>
        <Row>
          <Icon color={white} width="1em">
            <img src={Mail} />
          </Icon>
          <P color={white}>myslaceklasy@email.com</P>
        </Row>
      </ContactWrapper>
      <P color={copyrights} textAlign="center">
        © Copyrights 2020.
      </P>
    </FooterWrapper>
  );
};

export default Footer;
