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
  );
};

export default ButtonSecondary;
