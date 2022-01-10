export interface ButtonProps extends Partial<ButtonStyleProps> {
  disabled?: boolean;
  withDownloadIcon?: boolean;
  onClick: () => void;
}

export interface ButtonStyleProps {
  $isPrimary: boolean;
  $isHidden?: boolean;
  $alignSelf?: string;
}
