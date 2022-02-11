import { FC } from "react";
import { useTranslations } from "next-intl";

import Mail from "../../../public/assets/img/icons/mail.svg";
import Logo from "../../atoms/Logo";
import P from "../../atoms/P";
import Row from "../../atoms/Row";
import Icon from "../../atoms/Icon";
import Wrapper from "../../atoms/Wrapper";
import Column from "../../atoms/Column";
import * as S from "./styles";
import { white, grey100 } from "../../../styles/colors";

const Footer: FC = () => {
  const t = useTranslations("footer");

  return (
    <S.FooterWrapper>
      <Wrapper
        flexDirection="column"
        flexDirectionDT="row"
        justifyContent="space-between"
        alignItems="flex-start"
        margin="0"
      >
        <Logo isBackgroundDark />
        <S.ContactWrapper>
          <S.FooterP>{t("contact")}</S.FooterP>
          <Row>
            <Icon color={white}>
              <S.MailIcon>
                <Mail style={{ width: "100%", height: "100%" }}></Mail>
              </S.MailIcon>
            </Icon>
            <S.MailA href={`mailto:${t("email")}`}>{t("email")}</S.MailA>
          </Row>
        </S.ContactWrapper>
      </Wrapper>
      <Column>
        <P
          color={grey100}
          textAlign="center"
          fontSize="1.4rem"
          paddingBottom="0.4rem"
          marginTop="2.8rem"
        >
          {t("copyrights")}
        </P>
      </Column>
    </S.FooterWrapper>
  );
};

export default Footer;
