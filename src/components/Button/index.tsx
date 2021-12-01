import { FC } from "react";

import {
  Button as SButton,
  DownloadIconDisabled,
  DownloadIcon,
} from "./styles";
import { ButtonProps } from "./interface";

const Button: FC<ButtonProps> = ({
  children,
  isPrimary = true,
  disabled = false,
  withDownloadIcon = false,
  isHidden = false,
}) => {
  return (
    <>
      <SButton isPrimary={isPrimary} disabled={disabled} isHidden={isHidden}>
        {withDownloadIcon &&
          (disabled ? (
            <DownloadIconDisabled aria-hidden title="Ikona Pobierania" />
          ) : (
            <DownloadIcon aria-hidden title="Ikona Pobierania" />
          ))}
        {children}
      </SButton>
    </>
  );
};

export default Button;
