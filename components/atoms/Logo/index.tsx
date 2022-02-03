import { FC } from "react";
import { useTranslation } from "react-i18next";

// import logoBlack from "../../../../public/assets/img/logo-black.svg";
// import logoWhite from "../../../../public/assets/img/logo-white.svg";
import { LogoProps } from "./interface";
import * as S from "./styles";

const Logo: FC<LogoProps> = ({ isBackgroundDark }) => {
  const { t } = useTranslation("", { keyPrefix: "common" });

  return (
    <S.LogoDiv>
      <S.Img
        // src={isBackgroundDark ? logoWhite : logoBlack}
        alt={t("logoAlt")}
      />
    </S.LogoDiv>
  );
};

export default Logo;
