import { FC } from "react";

import {
  ButtonSecondary as SButtonSecondary,
  DownloadIconDisabled,
  DownloadIcon,
} from "./styledComponents";
import { ButtonProps } from "./interface";

const ButtonSecondary: FC<ButtonProps> = ({
  disabled = false,
  withDownloadIcon = false,
  children,
}) => {
  return (
    <SButtonSecondary disabled={disabled}>
      {withDownloadIcon &&
        (disabled ? <DownloadIconDisabled /> : <DownloadIcon />)}
      {children}
    </SButtonSecondary>
              <DownloadIconDisabled aria-hidden title="Ikona Pobierania" />
              <DownloadIcon aria-hidden title="Ikona Pobierania" />
  );
};

export default ButtonSecondary;
