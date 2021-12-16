type Tag = {
  text: string;
  isDroppable?: false;
  fontSize?: string;
  onRemoveTag?: never;
};

type DroppableTag = {
  text: string;
  isDroppable?: true;
  fontSize?: string;
  onRemoveTag?: () => void;
};

export type TagProps = Tag | DroppableTag;

export default interface TagWrapperProps {
  fontSize?: string;
}
