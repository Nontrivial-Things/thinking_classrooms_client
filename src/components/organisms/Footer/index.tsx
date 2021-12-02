import { FC } from "react";

import Mail from "../../../assets/img/icons/mail.svg";
import Logo from "../../atoms/Logo";
import P from "../../atoms/P";
import Row from "../../atoms/Row";
import Icon from "../../atoms/Icon";
import Wrapper from "../../atoms/Wrapper";
import Column from "../../atoms/Column";
import * as S from "./styles";
import { white, lightGrey } from "../../../assets/styles/colors";

const Footer: FC = () => {
  return (
    <S.FooterWrapper>
      <Wrapper
        flexDirection="column"
        flexDirectionDT="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Logo isBackgroundDark />
        <S.ContactWrapper>
          <S.FooterP>Kontakt</S.FooterP>
          <Row>
            <Icon color={white} width="1em">
              <img src={Mail} />
            </Icon>
            <S.MailA href="mailto:myslaceklasy@email.com">
              myslaceklasy@email.com
            </S.MailA>
          </Row>
        </S.ContactWrapper>
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
    </S.FooterWrapper>
  );
};

export default Footer;
