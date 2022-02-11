type CommonTagProps = {
  text: string;
  fontSize?: string;
};

type Tag = {
  isDroppable?: false;
  onRemoveTag?: never;
};

type DroppableTag = {
  isDroppable?: true;
  onRemoveTag?: () => void;
};

export type TagProps = (Tag | DroppableTag) & CommonTagProps;

export default interface TagWrapperProps {
  fontSize?: string;
}
