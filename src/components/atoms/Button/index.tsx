import { FC } from "react";

import * as S from "./styles";
import { ButtonProps } from "./interface";

const Button: FC<ButtonProps> = ({
  children,
  isPrimary = true,
  disabled = false,
  withDownloadIcon = false,
  isHidden = false,
  as,
  to,
}) => {
  return (
    <S.Button
      isPrimary={isPrimary}
      disabled={disabled}
      isHidden={isHidden}
      as={as}
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
