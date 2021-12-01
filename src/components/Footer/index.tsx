import { FC } from "react";

import Mail from "../../assets/img/icons/mail.svg";
import Logo from "../Logo";
import P from "../P";
import Row from "../Row";
import Icon from "../Icon";
import Wrapper from "../Wrapper";
import Column from "../Column";
import { FooterWrapper, ContactWrapper, FooterP, MailA } from "./styles";
import { white, lightGrey } from "../../assets/styles/colors";

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Wrapper
        flexDirection="column"
        flexDirectionDT="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Logo isBackgroundDark />
        <ContactWrapper>
          <FooterP>Kontakt</FooterP>
          <Row>
            <Icon color={white} width="1em">
              <img src={Mail} />
            </Icon>
            <MailA href="mailto:myslaceklasy@email.com">
              myslaceklasy@email.com
            </MailA>
          </Row>
        </ContactWrapper>
      </Wrapper>
      <Column>
        <P
          color={lightGrey}
          textAlign="center"
          fontSize="0.875em"
          paddingBottom="0.25em"
          marginTop="1.75em"
        >
          © Copyrights 2020.
        </P>
      </Column>
    </FooterWrapper>
  );
};

export default Footer;
