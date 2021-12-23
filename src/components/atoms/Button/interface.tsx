import { Component } from "react";

export interface ButtonProps extends Partial<ButtonStyleProps> {
  disabled?: boolean;
  withDownloadIcon?: boolean;
}

export interface ButtonStyleProps {
  isPrimary: boolean;
  isHidden?: boolean;
  as?: any;
  to?: any;
}
