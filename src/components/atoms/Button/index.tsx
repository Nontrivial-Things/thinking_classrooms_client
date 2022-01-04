import { FC } from "react";

import * as S from "./styles";
import { ButtonProps } from "./interface";

const Button: FC<ButtonProps> = ({
  children,
  $alignSelf,
  $margin,
  $isPrimary = true,
  disabled = false,
  withDownloadIcon = false,
  $isHidden = false,
}) => {
  return (
    <S.Button
      $isPrimary={$isPrimary}
      disabled={disabled}
      $isHidden={$isHidden}
      $alignSelf={$alignSelf}
      $margin={$margin}
    >
      {withDownloadIcon &&
        (disabled ? (
          <S.DownloadIconDisabled aria-hidden title="Ikona Pobierania" />
        ) : (
          <S.DownloadIcon aria-hidden title="Ikona Pobierania" />
        ))}
      {children}
    </S.Button>
  );
};

export default Button;
