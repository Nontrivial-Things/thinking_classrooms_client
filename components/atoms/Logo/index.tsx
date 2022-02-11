import { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import LogoBlack from "../../../public/assets/img/logo-black.svg";
import LogoWhite from "../../../public/assets/img/logo-white.svg";
// removed "width" and "height" in svg files to set width and height dependent on LogoDiv!
import { LogoProps } from "./interface";
import * as S from "./styles";

const Logo: FC<LogoProps> = ({ isBackgroundDark }) => {
  const t = useTranslations("common");

  return (
    <S.LogoDiv>
      <Link href="/" passHref>
        {isBackgroundDark ? (
          <a>
            <LogoWhite
              alt={t("logoAlt")}
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        ) : (
          <a>
            <LogoBlack
              alt={t("logoAlt")}
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        )}
      </Link>
    </S.LogoDiv>
  );
};

export default Logo;
