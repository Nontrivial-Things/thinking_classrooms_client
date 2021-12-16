import { FC } from "react";

import * as S from "./styles";
import { TagProps } from "./interface";

const Tag: FC<TagProps> = ({
  text,
  fontSize,
  onRemoveTag,
  isDroppable = false,
}) => (
  <S.TagWrapper fontSize={fontSize}>
    {text}
    {isDroppable && (
      <S.RemoveButton aria-label="Usuń tag" onClick={() => onRemoveTag!()}>
        <S.RemoveTagIcon />
      </S.RemoveButton>
    )}
  </S.TagWrapper>
);

export default Tag;
