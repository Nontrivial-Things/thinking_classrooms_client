import { FC } from "react";

import {
  ButtonSecondary,
  ButtonPrimary,
  DownloadIconDisabled,
  DownloadIcon,
} from "./styledComponents";
import { ButtonProps } from "./interface";

const Button: FC<ButtonProps> = ({
  isPrimary = true,
  disabled = false,
  withDownloadIcon = false,
  children,
}) => {
  return (
    <>
      {isPrimary && (
        <ButtonPrimary disabled={disabled}>{children}</ButtonPrimary>
      )}

      {!isPrimary && (
        <ButtonSecondary disabled={disabled}>
          {withDownloadIcon &&
            (disabled ? (
              <DownloadIconDisabled aria-hidden title="Ikona Pobierania" />
            ) : (
              <DownloadIcon aria-hidden title="Ikona Pobierania" />
            ))}
          {children}
        </ButtonSecondary>
      )}
    </>
  );
};

export default Button;
