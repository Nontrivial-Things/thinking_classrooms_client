import { FC } from "react";

import * as S from "./styles";
import { ButtonProps } from "./interface";
import { useTranslation } from "react-i18next";

const Button: FC<ButtonProps> = ({
  children,
  $alignSelf,
  $isPrimary = true,
  disabled = false,
  withDownloadIcon = false,
  $isHidden = false,
  onClick,
}) => {
  const { t } = useTranslation("", { keyPrefix: "common" });

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
          <S.DownloadIconDisabled aria-hidden title={t("downloadIcon")} />
        ) : (
          <S.DownloadIcon aria-hidden title={t("downloadIcon")} />
        ))}
      {children}
    </S.Button>
  );
};

export default Button;
