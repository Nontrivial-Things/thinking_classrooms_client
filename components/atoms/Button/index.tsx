import { FC } from "react";
import { useTranslations } from "next-intl";

import { ButtonProps } from "./interface";
import * as S from "./styles";

const Button: FC<ButtonProps> = ({
  children,
  $alignSelf,
  $isPrimary = true,
  disabled = false,
  withDownloadIcon = false,
  $isHidden = false,
  onClick,
}) => {
  const t = useTranslations("common");

  return (
    <S.Button
      $isPrimary={$isPrimary}
      disabled={disabled}
      $isHidden={$isHidden}
      $alignSelf={$alignSelf}
      onClick={onClick}
    >
      {withDownloadIcon &&
        (disabled ? (
          <S.IconWrapper>
            <S.DownloadIconDisabled
              aria-hidde
              title={t("downloadIcon")}
              style={{ width: "100%", height: "100%" }}
            />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper>
            <S.DownloadIcon
              aria-hidden
              title={t("downloadIcon")}
              style={{ width: "100%", height: "100%" }}
            />
          </S.IconWrapper>
        ))}

      {children}
    </S.Button>
  );
};

export default Button;
