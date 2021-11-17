import { FC } from "react";

import { white, copyrights } from "../../assets/styles/colors";
import Mail from "../../assets/img/icons/mail.svg";
import Logo from "../Logo";
import P from "../P/styledComponents";
import Row from "../Row/styledComponents";
import Icon from "../Icon/styledComponents";
import Wrapper from "../Wrapper/styledComponents";
import Column from "../Column/styledComponents";
import {
  FooterWrapper,
  ContactWrapper,
  FooterP,
  MailA,
} from "./styledComponents";
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
