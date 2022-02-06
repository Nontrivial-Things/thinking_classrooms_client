import { FC } from "react";
import { useTranslations } from "next-intl";

import LogoBlack from "../../../public/assets/img/logo-black.svg";
import LogoWhite from "../../../public/assets/img/logo-white.svg";
import { LogoProps } from "./interface";
import * as S from "./styles";

const Logo: FC<LogoProps> = ({ isBackgroundDark }) => {
  const t = useTranslations("common");

  return (
    <S.LogoDiv>
      {isBackgroundDark ? (
        <LogoWhite alt={t("logoAlt")} />
      ) : (
        <LogoBlack alt={t("logoAlt")} />
      )}
    </S.LogoDiv>
  );
};

export default Logo;
