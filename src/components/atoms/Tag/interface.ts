export interface TagStyleProps {
  text: string;
  isDroppable?: boolean;
  fontSize?: string;
  onRemoveTag?: () => void;
}

export interface TagWrapperProps {
  fontSize?: string;
}

export interface ButtonProps {
  onClick?: () => void;
}
