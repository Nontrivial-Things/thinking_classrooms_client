import { FC } from "react";
import { Link } from "react-router-dom";

import Mail from "../../../assets/img/icons/mail.svg";
import Logo from "../../atoms/Logo";
import P from "../../atoms/P";
import Row from "../../atoms/Row";
import Icon from "../../atoms/Icon";
import Wrapper from "../../atoms/Wrapper";
import Column from "../../atoms/Column";
import * as S from "./styles";
import { white, grey200 } from "../../../assets/styles/colors";

const Footer: FC = () => {
  return (
    <S.FooterWrapper>
      <Wrapper
        flexDirection="column"
        flexDirectionDT="row"
        justifyContent="space-between"
        alignItems="flex-start"
        margin="0"
      >
        <Link to="/">
          <Logo isBackgroundDark />
        </Link>
        <S.ContactWrapper>
          <S.FooterP>Kontakt</S.FooterP>
          <Row>
            <Icon color={white} width="1.6rem">
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
          color={grey200}
          textAlign="center"
          fontSize="1.4rem"
          paddingBottom="0.4rem"
          marginTop="2.8rem"
        >
          © Copyrights 2020.
        </P>
      </Column>
    </S.FooterWrapper>
  );
};

export default Footer;
