import { FC } from "react";

import { TagWrapper, RemoveButton, RemoveTagIcon } from "./styles";
import { TagProps } from "./interface";

const Tag: FC<TagProps> = ({ text, isDroppable = false }) => {
  return (
    <TagWrapper>
      {text}
      {isDroppable && (
        <RemoveButton aria-label="Usuń tag">
          <RemoveTagIcon />
        </RemoveButton>
      )}
    </TagWrapper>
  );
};

export default Tag;
