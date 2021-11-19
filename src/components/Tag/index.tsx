import { FC } from "react";

import { TagWrapper, RemoveTagIcon } from "./styledComponents";
import { TagProps } from "./interface";

const Tag: FC<TagProps> = ({ text, isDroppable = false }) => {
  return (
    <TagWrapper>
      {text}
      {isDroppable && <RemoveTagIcon />}
    </TagWrapper>
  );
};

export default Tag;
