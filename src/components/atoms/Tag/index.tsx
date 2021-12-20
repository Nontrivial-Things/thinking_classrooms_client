import { FC } from "react";

import * as S from "./styles";
import { TagStyleProps } from "./interface";

const Tag: FC<TagStyleProps> = ({
  text,
  fontSize,
  onRemoveTag = (e) => {
    e.prevent.default();
  },
  isDroppable = false,
}) => {
  return (
    <S.TagWrapper fontSize={fontSize}>
      {text}
      {isDroppable && (
        <S.RemoveButton aria-label="Usuń tag" onClick={(e) => onRemoveTag(e)}>
          <S.RemoveTagIcon />
        </S.RemoveButton>
      )}
    </S.TagWrapper>
  );
};

export default Tag;
