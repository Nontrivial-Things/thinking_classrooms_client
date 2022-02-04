import { FC } from "react";

import * as S from "./styles";
import { ButtonProps } from "./interface";
import { useTranslations } from "next-intl";

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
          <S.DownloadIconDisabled aria-hidden title={t("downloadIcon")} />
        ) : (
          <S.DownloadIcon aria-hidden title={t("downloadIcon")} />
        ))}
      {children}
    </S.Button>
  );
};

export default Button;
