export interface ButtonProps extends Partial<ButtonStyleProps> {
  disabled?: boolean;
  withDownloadIcon?: boolean;
}

export interface ButtonStyleProps {
  isPrimary: boolean;
}
